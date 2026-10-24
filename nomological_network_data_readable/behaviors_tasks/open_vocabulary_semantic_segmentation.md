# Open-vocabulary semantic segmentation
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Open-vocabulary segmentation  

## State of the Field

**Space of definitions.** Across the definitions, the common framing is segmentation at the pixel or image-region level in an open-vocabulary setting: papers describe assigning semantic labels to pixels and segmenting objects or regions that correspond to textual labels. Several definitions make the open-vocabulary condition explicit as working from candidate classes or textual labels that were not necessarily seen during training, while another definition describes identifying and segmenting objects from "free-form language descriptions".

**Variants.** Papers use both "open-vocabulary semantic segmentation" and "open-vocabulary segmentation" for the same general behavior. The studied formulations vary mainly in how labels are supplied, as a candidate class list, as textual labels, or as free-form language descriptions, and a paper also places it in a framework that switches between referring expression segmentation, open-vocabulary segmentation, and other visual grounding tasks.

**Space of elicitation and scores.** Papers link this behavior to three measurement instruments. ADE20K and Pascal Context appear most often, with PASCAL VOC also used; the linked evidence describes evaluation on these datasets or validation splits, most commonly with mIoU, and some papers also report mAcc.

**What it is taken as evidence of.** Papers link this behavior to one construct, Visual grounding. The recorded link is simply that open-vocabulary semantic segmentation is related to Visual grounding, and no other construct links are recorded.

## Sources

**[FineCLIP: Self-distilled Region-based CLIP for Better Fine-grained Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/3122aaa22b2fe83f9cead1a696f65ceb-Paper-Conference.pdf)**
> Assigning semantic labels to pixels in an open-vocabulary setting.

**[Leveraging Hallucinations to Reduce Manual Prompt Dependency in Promptable Segmentation](https://proceedings.neurips.cc/paper_files/paper/2024/file/c1e1ad233411e25b54bb5df3a0576c2c-Paper-Conference.pdf) (as "Open-vocabulary segmentation")**
> The observable task of segmenting objects based on a list of candidate classes without prior training on those specific classes.

## Relationships

### Open-vocabulary semantic segmentation →
- **Pascal Context** (measurements) — *measured_by*
  > Specifically, we tested it on the validation splits of PASCAL VOC (21 classes) [12, 11], Pascal Context (59 classes) [42], and COCO-Object (80 classes) [3] (Section 5)
  - [Leveraging Hallucinations to Reduce Manual Prompt Dependency in Promptable Segmentation](https://proceedings.neurips.cc/paper_files/paper/2024/file/c1e1ad233411e25b54bb5df3a0576c2c-Paper-Conference.pdf)
- **ADE20K** (measurements) — *measured_by*
  > “We fine-tune segmentation models on COCO Stuff [4] and evaluate them on ADE20K [71] and PASCAL Context [34] dataset”
  - [FineCLIP: Self-distilled Region-based CLIP for Better Fine-grained Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/3122aaa22b2fe83f9cead1a696f65ceb-Paper-Conference.pdf)
- **PASCAL VOC** (measurements) — *measured_by*
  > Specifically, we tested it on the validation splits of PASCAL VOC (21 classes) [12, 11], Pascal Context (59 classes) [42], and COCO-Object (80 classes) [3] (Section 5)
  - [Leveraging Hallucinations to Reduce Manual Prompt Dependency in Promptable Segmentation](https://proceedings.neurips.cc/paper_files/paper/2024/file/c1e1ad233411e25b54bb5df3a0576c2c-Paper-Conference.pdf)

### Associated with
- **Visual grounding** (constructs)
  > flexible switching between referring expression segmentation, open-vocabulary segmentation, and other visual grounding tasks. (Section 1)
  - [Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)
