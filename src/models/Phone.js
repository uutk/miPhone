import mongoose from "mongoose";

const PhoneSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: "Image URL is required"
  },
  name: {
    type: String,
    required: "Name is required"
  },
  model: {
    type: String,
    required: "Model number is required"
  },
  company: {
    type: String,
    required: "Company is required"
  },
  releaseDate: Date,
  releasePrice: Number,
  releaseOS: String,
  specification: {
    appearance: {
      material: String,
      WxHxD: {
        w: mongoose.Types.Decimal128,
        h: mongoose.Types.Decimal128,
        d: mongoose.Types.Decimal128
      },
      weight: mongoose.Types.Decimal128
    },
    display: {
      size: mongoose.Types.Decimal128,
      resolution: {
        w: Number,
        h: Number
      },
      ppi: Number,
      Dtype: String,
      Dwidth: mongoose.Types.Decimal128,
      Dheight: mongoose.Types.Decimal128
    },
    performance: {
      AP: String,
      CPU: String,
      core: Number,
      CPUClock: Number,
      GPU: String,
      RAM: Number,
      memory: Number
    },
    camera: {
      sensor: String,
      aperture: String,
      flash: String,
      videoFrame: Number
    },
    battery: {
      mAH: Number,
      Btype: String,
      wireless: Number
    }
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Phone", PhoneSchema);
export default model;
