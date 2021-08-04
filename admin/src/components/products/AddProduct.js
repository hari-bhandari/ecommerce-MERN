import React, {Fragment, useEffect, useState} from 'react';
import Breadcrumb from '../common/breadcrumb';
import CKEditors from "react-ckeditor-component";
import 'react-dropzone-uploader/dist/styles.css'
import axios from "axios";
import {ShowError, ShowSuccess} from "../../util/alert";
import PhotoUpload from "../_shared/PhotoUpload";
import CategorySelect from "../_shared/CategorySelect";
import {useForm} from 'react-hook-form';
import SubCategorySelect from "../_shared/subCategorySelect";
import {UploadImagesToCloud} from "./AddProductsHelperFunctions";
import Toast from "light-toast";

const Add_product = ({location}) => {
    const [item, setItem] = useState(null)
    const {register, handleSubmit, reset} = useForm({defaultValues:location.state?{name:location.state.name,price:location.state.price,countInStock:location.state.countInStock}:{}});
    const [thumbImage, setThumbImage] = useState([])
    const [images, setImages] = useState([])
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [description, setDescription] = useState('')
    const [defaultValueForImages,setDefaultValuesForImages]=useState(location?.state?.images?location.state.images:[])
    const [defaultValueForThumbImage,setDefaultValueForThumbImage]=useState(location?.state?.thumbImage?[location.state.thumbImage]:[])
    const emptyValues=()=>{
        setCategory(null)
        setImages([])
        setSubCategory(null)
        setDescription('')
        setThumbImage([])
        setItem(null)
        reset({name:'',price:0,countInStock:0})
        setDefaultValuesForImages([])
        setDefaultValueForThumbImage([])
    }

    useEffect(() => {
        if (location.state) {
            const {state} = location
            setItem(state)
            setSubCategory({id:state.subCategory,name:state.subCategory})
            setCategory({id:state.category,name:state.category})
            setDescription(state.description)
            setImages({pictures:state.images,files:[]})
            setThumbImage({pictures:[state.thumbImage],files:[]})
        }
    }, [location.state])
    const onSubmit = async data => {
        const {name, price, countInStock} = data;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if(!category){
            return ShowError('You must select category before you add products')
        }
        const SubCategory=subCategory?{subCategory:subCategory.id}:{}
        const formData = {
            ...SubCategory,
            name,
            price,
            countInStock,
            description,
            category: category.id,
        }

        const productImages=await UploadImagesToCloud(images)
        const productThumbImage=await UploadImagesToCloud(thumbImage)
        Toast.loading('Images uploaded, Just creating a product now')
        formData["images"]=productImages.images
        formData["thumbImage"]=productThumbImage.images[0]
        if (location.state) {
            try {

                const res = await axios.put(`/api/v1/products/${location.state._id}`, formData, config);
                Toast.hide()
                ShowSuccess(`You have successfully updated a  product with the name of  ${res.data.data.name}`)
                emptyValues()

            } catch (e) {
                Toast.hide()

                ShowError(e.response.data.error)
            }
        }
        else {
            try {
                const res = await axios.post('/api/v1/products', formData, config);
                Toast.hide()
                emptyValues()
                ShowSuccess(`You have successfully created a  product with the name of  ${res.data.data.name}`)

            } catch (e) {
                console.log(e)
                ShowError(e.response.data.error)
            }
        }
    }

    const onChange = (e) => {
        const newContent = e.editor.getData();
        setDescription(newContent)
    }
    const getCategoryID=()=>{
        if(!category){
            return null
        }
        return category._id
    }


    return (
        <Fragment>
            <Breadcrumb title={item?'Update product':'Add product' } parent="Physical"/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{item?'Update':'Add'} Product</h5>

                            </div>
                            <div className="card-body">
                                <div className="row product-adding">
                                    <div className="col-xl-5">
                                        <div className="add-product">
                                            <div className="row">
                                                <div className="col-xl-9 xl-50 col-sm-6 col-9">
                                                    <h3>Add your thumbnail </h3>

                                                    <PhotoUpload withIcon={false}
                                                                 withPreview={true}
                                                                 setImages={setThumbImage}
                                                                 singleImage={true}
                                                                 label={"This picture appears on the thumbnail.Make sure the picture looks detailed"}
                                                                 buttonText={"Choose your thumbnail image"}
                                                                 defaultImages={defaultValueForThumbImage}
                                                                 maxFiles={1}

                                                    />

                                                </div>
                                                <div className="col-xl-9 xl-50 col-sm-6 col-9">
                                                    <h3>Add more pictures </h3>
                                                    <PhotoUpload withIcon={false}
                                                                 withPreview={true}
                                                                 singleImage={false}
                                                                 label={"Adding more pictures helps customer to be more certain"}
                                                                 buttonText={"Choose more images"}
                                                                 setImages={setImages}
                                                                 defaultImages={defaultValueForImages}
                                                                 maxFiles={10}

                                                    />

                                                </div>
                                                <div className="col-xl-3 xl-50 col-sm-6 col-3">
                                                    <ul className="file-upload-product">
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7">
                                        <form className="needs-validation add-product-form"
                                              onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form form-label-center">
                                                <div className="form-group mb-3 row">
                                                    <label className="col-xl-3 col-sm-4 mb-0">Product Name :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control" name="name"
                                                               id="validationCustom01" type="text"  {...register("name", { required: true })}
                                                               required/>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3 row">
                                                    <label className="col-xl-3 col-sm-4 mb-0">Price :</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control mb-0" name="price"
                                                               id="validationCustom02" type="number" step=".01" {...register("price", { required: true })}
                                                               required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form">
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-sm-4 mb-0">Select Category</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <CategorySelect initialValue={"Select the category"} setValue={setCategory} value={category} setSubCategory={setSubCategory}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-sm-4 mb-0">Select sub
                                                        category</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <SubCategorySelect initialValue={"Choose your subcategory"} setValue={setSubCategory} value={subCategory} categoryID={getCategoryID()}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-sm-4 mb-0">Products in stock</label>
                                                    <div className="col-xl-8 col-sm-7">
                                                        <input className="form-control mb-0" name="countInStock"
                                                               id="validationCustom02" type="number"  {...register("countInStock", { required: true })}
                                                               required/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-xl-3 col-sm-4">Add Description :</label>
                                                    <div className="col-xl-8 col-sm-7 description-sm">
                                                        <CKEditors
                                                            activeclassName="p10"
                                                            content={description}
                                                            events={{
                                                                "change": onChange
                                                            }}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="offset-xl-3 offset-sm-4">
                                                <button type="submit" className="btn btn-primary">{item?'Update Product':'Add Product'}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Add_product
