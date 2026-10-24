# PartNet-Mobility
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the papers, PartNet-Mobility is most commonly described as a large-scale dataset of 3D articulated objects with part-level segmentation and kinematic information, used for training and evaluating articulation and reconstruction tasks. A smaller framing presents it as articulated 3D objects used within the SAPIEN simulation environment to define seen and unseen manipulation tasks for evaluation. One paper also specifies a subset of five categories: Laptop, Box, Refrigerator, Storage-Furniture, and Table.

**What it is claimed to measure.** Its reported measurement role is narrow rather than spread across many targets: papers use it to measure one construct, Generalization, and one behavioral indicator, Joint prediction. The Generalization link is described through validation on an extensive test set of unseen objects, while the Joint prediction link is described through quantitative analysis on the entire dataset and reported success-rate gains over prior work.

**Space of uses.** Papers commonly position PartNet-Mobility as an evaluation resource: one paper says it validates performance on the dataset and fine-tunes a pre-trained model using its data, and another uses its articulated objects to build an interactive SAPIEN simulation environment for evaluation on seen and unseen manipulation tasks. No other measurement instrument is linked to it.

## Sources

**[Real2Code: Reconstruct Articulated Objects via Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/028fcbcf85435d39a40c4d61b42c99a4-Paper-Conference.pdf)**
> A large-scale dataset of 3D articulated objects with part-level segmentation and kinematic information, used for training and evaluating models on articulation and reconstruction tasks.

## Relationships

### → PartNet-Mobility
- **Joint prediction** (behaviors tasks) — *measured_by*
  > “Given a ground-truth articulated URDF from PartNet-Mobility, we mask out all link and joint information. The objective is to reconstruct the masked URDF. Solving this objective includes two primary tasks: (1) link placement—determine the spatial arrangement of object parts, and (2) joint prediction—infer the movement capabilities between parts.”
  - [Articulate-Anything:  Automatic Modeling of Articulated Objects via a Vision-Language Foundation Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/2c8047bf3ed8ef6905351608d641f02f-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > "we validate the performance of Real2Code on the well-established PartNet-Mobility dataset (Mo et al., 2019), using an extensive test set of unseen objects"
  - [Real2Code: Reconstruct Articulated Objects via Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/028fcbcf85435d39a40c4d61b42c99a4-Paper-Conference.pdf)
