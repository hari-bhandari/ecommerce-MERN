import React from 'react';
import { Link } from 'react-router-dom';
import { VectorMap } from 'react-jvectormap';

const jVector = () => {
    return (
        <div className="container-fluid">
            <div className="block-header">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                        <h2>JVector Map</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Oculux</Link></li>
                                <li className="breadcrumb-item"><Link to="/">Elements</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">JVector Map</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right hidden-xs">
                        <Link to="/" className="btn btn-sm btn-primary btn-round" title="">Add New</Link>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <div id="world-map-markers" className="jvector-map main-map">
                                <VectorMap
                                    containerStyle={{
                                        height: '400px'
                                    }}
                                    map={'world_mill'}
                                    backgroundColor='transparent'
                                    borderColor='#fff'
                                    borderOpacity={0.25}
                                    borderWidth={0}
                                    color='#e6e6e6'
                                    regionStyle={{ initial: { fill: '#6c757d' } }}
                                    markerStyle={{
                                        initial: {
                                            r: 5,
                                            'fill': '#fff',
                                            'fill-opacity': 1,
                                            'stroke': '#000',
                                            'stroke-width': 1,
                                            'stroke-opacity': 0.4
                                        },
                                    }}
                                    markers={[{
                                        latLng: [21.00, 78.00],
                                        name: 'INDIA : 350'

                                    },
                                    {
                                        latLng: [-33.00, 151.00],
                                        name: 'Australia : 250'

                                    },
                                    {
                                        latLng: [36.77, -119.41],
                                        name: 'USA : 250'

                                    },
                                    {
                                        latLng: [55.37, -3.41],
                                        name: 'UK   : 250'

                                    },
                                    {
                                        latLng: [25.20, 55.27],
                                        name: 'UAE : 250'

                                    },
                                    {
                                        latLng: [35.65, 139.83],
                                        name: 'JP : 37'

                                    },
                                    {
                                        latLng: [-23.53, -46.62],
                                        name: 'BR : 162'

                                    },
                                    {
                                        latLng: [50.43, 30.51],
                                        name: 'UA : 129'

                                    }]
                                    }
                                    series={{
                                        regions: [{
                                            values: {
                                                "US": '#ffec94',
                                                "SA": '#ffaeae',
                                                "AU": '#64e2d4',
                                                "IN": '#b0e57c',
                                                "GB": '#b4d8e7',
                                                "JP": '#56baec',
                                                "BR": '#fe8282',
                                                "UA": '#e2ffcf',
                                            },
                                            attribute: 'fill'
                                        }]
                                    }}
                                    hoverOpacity={null}
                                    normalizeFunction='linear'
                                    zoomOnScroll={false}
                                    scaleColors={['#000000', '#000000']}
                                    selectedColor='#000000'
                                    selectedRegions={[]}
                                    enableZoom={false}
                                    hoverColor='#fff'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row clearfix">
                <div className="col-md-12 col-lg-6">
                    <div className="card">
                        <div className="header">
                            <h2>India Map</h2>
                        </div>
                        <div className="body text-center">
                            <div id="india">
                                <VectorMap
                                    containerStyle={{
                                        height: '400px'
                                    }}
                                    map={'in_mill'}
                                    backgroundColor='transparent'
                                    regionStyle={{ initial: { fill: '#f66d9b' } }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="card">
                        <div className="header">
                            <h2>USA Map</h2>
                        </div>
                        <div className="body text-center">
                            <div id="usa">
                                <VectorMap
                                    containerStyle={{
                                        height: '400px'
                                    }}
                                    map={'us_aea'}
                                    backgroundColor='transparent'
                                    regionStyle={{ initial: { fill: '#9367B4' } }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="card">
                        <div className="header">
                            <h2>UK Map</h2>
                        </div>
                        <div className="body text-center">
                            <div id="uk">
                                <VectorMap
                                    containerStyle={{
                                        height: '400px'
                                    }}
                                    map={'south_america_mill'}
                                    backgroundColor='transparent'
                                    regionStyle={{ initial: { fill: '#17C2D7' } }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="card">
                        <div className="header">
                            <h2>Australia Map</h2>
                        </div>
                        <div className="body text-center">
                            <div id="australia">
                                <VectorMap
                                    containerStyle={{
                                        height: '400px'
                                    }}
                                    map={'au_mill'}
                                    backgroundColor='transparent'
                                    regionStyle={{ initial: { fill: '#5CB65F' } }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default jVector
