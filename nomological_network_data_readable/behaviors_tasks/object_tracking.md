# Object tracking
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Motion tracking  

## State of the Field

**Space of definitions.** Most papers treat object tracking as identifying and following specific objects across video frames, commonly with a consistent object identity and a reported location such as a grid position or bounding box. Some papers frame the same behavior as locating a referred object across multiple scenes or moments, while another instruction-based formulation asks models to track the positions of multiple objects as they are shuffled. One study specifies outputs in the form "<track> object id1, object grid position1; ..." (Look, Remember and Reason: Grounded Reasoning in Videos with Language Models).

**Variants.** Across papers, the behavior appears in several settings: multi-target tracking in complex real-world video, scene-referred object tracking, text-referred object tracking, and instruction-following problems built around shuffled objects. A smaller line of work uses the name motion tracking, and another formulation describes the behavior as converting per-frame object detections into motion trajectories across a video.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers describe task formats rather than named instruments, including answers written as object IDs plus grid positions, relation questions that require tracking referred objects across scenes or moments, and evaluations built around tracking shuffled objects.

**What it is taken as evidence of.** Only one construct is linked to it, Grounding. One paper claims a causal relationship from object tracking to Grounding, stating that introducing tracking among low-level surrogate tasks grounds a multimodal model to relevant low-level visual information in the scene.

## Sources

**[Large Language Models as Tool Makers](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed91353f700d113e5d848c7e04a858b0-Paper-Conference.pdf)**
> The observable behavior of identifying and following the movement of specific objects across video frames, often by assigning consistent identifiers and reporting bounding boxes or grid positions.

**[Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf) (as "Motion tracking")**
> Following the movement of entities across video frames.

## Relationships

### Object tracking →
- **Grounding** (constructs) — *causes*
  > Our multi-modal LRR model is grounded to relevant low-level visual information in the scene by stochastically introducing low-level surrogate tasks during training, including object recognition, re-identification, and tracking (Section 1).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
