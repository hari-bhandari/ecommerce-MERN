import AuthenticationForm from "@/features/authentication-form";
import { openModal, closeModal } from '@redq/reuse-modal';
import Cart from "@/features/cart/cart";
import React from "react";
import AddReview from "@/components/Product/details/Review/AddReview";
export const OpenAddReviewTab=(id:string)=>{
    openModal({
        show: true,
        config: {
            enableResizing: false,
            disableDragging: true,
            className: 'quick-view-modal',
            width: 458,
            height: 'auto',
        },
        closeOnClickOutside: true,
        component: AddReview,
        closeComponent: () => <div />,
        componentProps: { onCloseBtnClick: closeModal, scrollbarHeight: 330 ,id:id}})
}

export const OpenAuthTab=()=>
    openModal({
    show: true,
    overlayClassName: 'quick-view-overlay',
    closeOnClickOutside: true,
    component: AuthenticationForm,
    closeComponent: '',
    config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
    },
});
export const OpenCartModal=()=>openModal({
    show: true,
    config: {
        className: 'cartPopup',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
            tension: 360,
            friction: 40,
        },
    },
    closeOnClickOutside: true,
    component: Cart,
    closeComponent: () => <div />,
    componentProps: { onCloseBtnClick: closeModal, scrollbarHeight: 330 },
});