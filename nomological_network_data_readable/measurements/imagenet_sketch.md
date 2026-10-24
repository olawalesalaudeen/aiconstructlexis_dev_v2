# ImageNet-Sketch
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** ImageNetSketch  

## State of the Field

**What it is.** Across the definitions, papers treat ImageNet-Sketch mostly as an out-of-distribution ImageNet benchmark made up of sketch-like images. The prevailing description is a dataset of sketch-like, sometimes explicitly black-and-white, images derived from ImageNet classes, used to test robustness and generalization; one definition phrases it as an out-of-distribution benchmark for ImageNet, while others describe it as a dataset for evaluating image classification under out-of-distribution conditions.

**What it is claimed to measure.** Papers link it to one behavioral indicator, Image classification, and to no constructs. The only measured_by claim treats ImageNet-Sketch as measuring Image classification, so the reported measurement use is confined to that single behavioral indicator rather than spread across multiple linked targets.

**Space of uses.** In the cited uses, papers place it alongside ImageNet, ImageNet-R, and ImageNet-Rendition when evaluating models. One snippet describes evaluating ViT-B/16 and ViT-L/16 on ImageNet-R and ImageNet-Sketch to investigate out-of-distribution robustness, and another places it among the image datasets used to evaluate TIMM; papers do not link it to any other measurement instrument.

## Sources

**[LiNeS: Post-training Layer Scaling Prevents Forgetting and Enhances Model Merging](https://proceedings.iclr.cc/paper_files/paper/2025/file/43ae0b566b802b2d00e525b672794b82-Paper-Conference.pdf) (as "ImageNetSketch")**
> An out-of-distribution benchmark for ImageNet consisting of sketch-like images to test model generalization.

**[SageAttention: Accurate 8-Bit Attention for Plug-and-play Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/b286c344d38e10d2466c0514b78e2f36-Paper-Conference.pdf)**
> A dataset containing sketch-like images derived from ImageNet, used to evaluate model robustness and generalization for image classification.

## Relationships

### → ImageNet-Sketch
- **Image classification** (behaviors tasks) — *measured_by*
  > TIMM is evaluated on on three image datasets: ImageNet (Deng et al., 2009), ImageNet-Sketch (Sketch) (Wang et al., 2019), and ImageNet-Rendition (ImageNet-r) (Hendrycks et al., 2021).
  - [SageAttention: Accurate 8-Bit Attention for Plug-and-play Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/b286c344d38e10d2466c0514b78e2f36-Paper-Conference.pdf)
