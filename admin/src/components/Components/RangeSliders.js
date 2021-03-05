import React, { useState } from 'react';
import RangeSlider from '../common/RangeSlider';


const RangeSliders = () => {
  const [Slider1, setSlider1] = useState(52);
  const [Slider2, setSlider2] = useState(667);
  const horizontalLabels = {
    0: '10',
    100: '100'
  }
  const horizontalLabels2 = {
    100: '100',
    1000: '1000'
  }
  return (
    <div className="container-fluid">
      <div className="block-header">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <h1>Range Sliders</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Oculux</a></li>
                <li className="breadcrumb-item"><a href="/">Components</a></li>
                <li className="breadcrumb-item active" aria-current="page">Range Sliders</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="/" className="btn btn-sm btn-primary" >Create Campaign</a>
            <a href="https://themeforest.net/item/oculux-bootstrap-4x-admin-dashboard-clean-modern-ui-kit/23091507" className="btn btn-sm btn-success" title="Themeforest"><i className="icon-basket" /> Buy Now</a>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="body">
              <div className="irs-demo m-b-30"><b>Start without params</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>Set min value, max value and start point</b>
                <RangeSlider
                  min={100}
                  max={1000}
                  value={Slider2}
                  labels={horizontalLabels2}
                  onChange={(value) => setSlider2(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>Set type to double and specify range, also showing grid and adding prefix "$"</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>Set up range with negative values</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>Using step 250</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>Set up range with fractional values, using fractional step</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>Set up you own numbers</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>Using any strings as your values</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>One more example with strings</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
              <div className="irs-demo m-b-30"><b>No prettify. Big numbers are ugly and unreadable</b>
                <RangeSlider
                  min={0}
                  max={100}
                  value={Slider1}
                  labels={horizontalLabels}
                  onChange={(value) => setSlider1(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RangeSliders;