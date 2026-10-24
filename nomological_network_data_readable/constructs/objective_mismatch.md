# Objective mismatch
**Type:** Construct  
**Referenced in:** 2 papers  
**Also known as:** Reward mis-specification  

## State of the Field

A discrepancy between the formal objective used for training a model and the intended goal, causing the model to learn behaviors that are not truly aligned with user preferences.

## Sources

**[Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf)**
> A discrepancy between the formal objective used for training a model and the intended goal, causing the model to learn behaviors that are not truly aligned with user preferences.

**[Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/e45caa3d5273d105b8d045e748636957-Paper-Conference.pdf) (as "Reward mis-specification")**
> The extent to which a learned reward function contains spurious correlations or preferences that do not match the intended objective.

## Relationships

### Associated with
- **Text generation** (behaviors tasks)
  > As pointed out in Section 3.3, this can be attributed to an objective mismatch between text generation and preference modeling. (Section 5.2).
  - [Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf)
- **Preference prediction** (behaviors tasks)
  > The performance on preference label classiﬁcation also reveals that cDPO struggles with objective mismatch between the text generation and preference modeling... (Section 1).
  - [Geometric-Averaged Preference Optimization for Soft Preference Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/688c7a82e31653e7c256c6c29fd3b438-Paper-Conference.pdf)
- **Reward overoptimization** (constructs)
  > “There are two prevailing explanations for why this phenomenon occurs. 2. Reward Mis-specification. Learned reward functions may exhibit spurious correlations that cause them to prefer unintended behaviors.”
  - [Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/e45caa3d5273d105b8d045e748636957-Paper-Conference.pdf)
