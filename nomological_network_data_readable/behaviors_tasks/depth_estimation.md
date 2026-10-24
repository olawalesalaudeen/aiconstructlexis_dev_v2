# Depth estimation
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats depth estimation as image-based prediction of depth, most commonly as producing a depth map that represents relative distance. One definition emphasizes returning a depth map from an image to indicate relative distances of objects from the camera, while another describes predicting the distance of points in a scene from the viewpoint, typically from a 2D image. One description also notes that the module takes an image as input and returns a depth map, with closer regions shown in warmer colors under an Inferno colormap.

**Variants.** The recorded variants are closely related image settings rather than separately named sub-tasks. Papers describe estimating the depth of objects, or of various points in a scene, from an image or 2D image. A narrower use appears as an intermediate depth estimate used to judge whether cookies are stacked.

**Space of elicitation and scores.** No measurement instrument is linked to it. The papers operationalize the behavior directly by taking an image as input and producing a depth map or depth estimate.

**What it is taken as evidence of.** Papers link it to one construct, Spatial reasoning. In Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models, one paper claims a causal relationship from depth estimation to spatial reasoning: to determine whether cookies were stacked, the model first produced an intermediate depth estimate, analyzed it, and then answered correctly that the cookies were stacked.

## Sources

**[Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)**
> Producing a depth map from an image to indicate relative distances of objects from the camera.

## Relationships

### Depth estimation →
- **Spatial reasoning** (constructs) — *causes*
  > To determine if there are cookies stacked on top of other cookies in the image... the model first produces an intermediate depth estimate. By analyzing the depth estimate... the model is able to correctly answer that the cookies are indeed stacked.
  - [Visual Sketchpad: Sketching as a Visual Chain of Thought for Multimodal Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb82011040977c7712409fbdb5456647-Paper-Conference.pdf)
