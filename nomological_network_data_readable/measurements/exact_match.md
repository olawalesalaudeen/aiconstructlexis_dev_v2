# Exact match
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** Exact-match evaluation, Exact Match  

## State of the Field

Across the provided literature, Exact Match (EM) is predominantly characterized as a conventional and strict evaluation metric that measures whether a model's generated output is identical to a ground-truth reference. Most definitions specify that this comparison is performed after normalization of both the predicted and reference strings, with one paper noting a prediction is correct "if and only if the normalized strings are identical" (The Berkeley Function Calling Leaderboard (BFCL)). The procedure is sometimes applied to a specific part of an output, such as a "dedicated answer field". As an evaluation metric, it is typically used to calculate the percentage of correct predictions and is often reported alongside other metrics like F1 and Intersection over Union (IoU). A less common application described in the data is its use as a "correctness criterion for training data filtering" (Token-Level Density-Based Uncertainty Quantification Methods for Eliciting Truthfulness of Large Language Models). The provided data also indicates that Exact Match is used as a way to measure `String manipulation`.

## Sources

**[Single Ground Truth Is Not Enough: Adding Flexibility to Aspect-Based Sentiment Analysis Evaluation](https://aclanthology.org/2025.naacl-long.603.pdf)**
> Binary accuracy metric that checks whether a generated response exactly matches the reference answer, used as a correctness criterion for training data filtering.

**[Hypo3D: Exploring Hypothetical Reasoning in 3D](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mao25b/mao25b.pdf) (as "Exact Match")**
> Evaluation metric measuring the percentage of model-predicted answers that exactly match the ground-truth answers after normalization.

**[The Berkeley Function Calling Leaderboard (BFCL): From Tool Use to Agentic Evaluation of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/patil25a/patil25a.pdf) (as "Exact-match evaluation")**
> A procedure that scores only a dedicated answer field by comparing normalized candidate and reference strings for exact identity.

## Relationships

### → Exact match
- **String manipulation** (behaviors tasks) — *measured_by*
  > Exact Match / Per Token Accuracy. Used for evaluating unscrambling. (Section 4)
  - [A Percolation Model of Emergence: Analyzing Transformers Trained on a Formal Language](https://proceedings.iclr.cc/paper_files/paper/2025/file/5cd2b0a6b7423af6369cbdbbb228e8d0-Paper-Conference.pdf)
