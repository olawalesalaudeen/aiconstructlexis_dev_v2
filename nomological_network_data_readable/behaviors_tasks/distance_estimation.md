# Distance estimation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Numerical distance calculation, Straight-line distance calculation  

## State of the Field

**Space of definitions.** Across the surveyed papers, the dominant framing is a task of determining direct distance, either by computing a numerical value or by selecting the correct straight-line or Euclidean distances. Most definitions describe it as computing the distance between objects or points, while one formulation narrows success to choosing the correct list of distances from one landmark to the others after viewing an environment, posed as multiple-choice QA with four options. The papers differ mainly in setting, visual scenes, landmarks in an environment, or geographic points, but agree that the target output is the correct direct distance relation.

**Variants.** Papers use several nearby names, including numerical distance calculation, distance estimation, and straight-line distance calculation. The studied variants include distances between objects in a visual scene, Euclidean distances from one landmark to all other landmarks after viewing an environment, and direct distances between two geographical points in map-based textual questions.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. In the paper descriptions themselves, elicitation ranges from numerical calculation prompts to a multiple-choice QA format with four options for the list of distances.

**What it is taken as evidence of.** Papers do not link this behavior to any construct, so they do not specify what it is evidence of.

## Sources

**[PhysBench: Benchmarking and Enhancing Vision-Language Models for Physical World Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/f38cb4cf9a5eaa92b3cfa481832719c6-Paper-Conference.pdf) (as "Numerical distance calculation")**
> The observable task of computing the distance between two or more objects in a visual scene.

**[Does Spatial Cognition Emerge in Frontier Models?](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb92196c6d2afe416528be19ba9963bc-Paper-Conference.pdf)**
> Selecting the straight-line distances from one landmark to other landmarks after viewing an environment.

**[MapEval: A Map-Based Evaluation of Geo-Spatial Reasoning in Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dihan25a/dihan25a.pdf) (as "Straight-line distance calculation")**
> The specific task of computing the direct distance between two geographical points, often requiring numerical computation.
