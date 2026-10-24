# Bradley-Terry model
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** Bradley-Terry regression  

## State of the Field

The Bradley-Terry model is consistently described across the provided literature as a statistical method for analyzing pairwise comparisons to estimate relative performance. Its prevailing use is to aggregate preference data to produce rankings, with one paper calling it "the canonical model for assessing relative performance of models based on pairwise comparisons" (AutoEval Done Right: Using Synthetic Data for Model Evaluation). Papers operationalize this in several ways: some use it to aggregate comparisons to "form a leaderboard over LLMs" (Prompt-to-Leaderboard: Prompt-Adaptive LLM Evaluations), while others use it to estimate preference probabilities or simulate annotation noise. In terms of what it evaluates, the model is used to measure the construct of `Faithfulness`. It is also studied in relation to `Preference prediction`. While most sources refer to it as the "Bradley-Terry model," a related framing is "Bradley-Terry regression," which specifically emphasizes its use in aggregating human preference votes to estimate model strength parameters.

## Sources

**[Rethinking Reward Model Evaluation: Are We Barking up the Wrong Tree?](https://proceedings.iclr.cc/paper_files/paper/2025/file/93f250215e4889119807b6fac3a57aec-Paper-Conference.pdf)**
> A pairwise preference model used to simulate annotation noise and estimate preference probabilities from pairwise comparisons.

**[Prompt-to-Leaderboard: Prompt-Adaptive LLM Evaluations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/frick25a/frick25a.pdf) (as "Bradley-Terry regression")**
> Statistical method used to aggregate pairwise comparison data into a leaderboard by estimating model strength parameters from human preference votes.

## Relationships

### → Bradley-Terry model
- **General ability** (constructs) — *measured_by*
  > Fageot et al. (2024); Chiang et al. (2024) employ the Bradley-Terry model (Bradley & Terry, 1952) (see Appendix B.2 for detailed introduction) to estimate model scores by maximizing the likelihood of the comparison results between models. (Section 2)
  - [UniCBE: An Uniformity-driven Comparing Based Evaluation Framework with Unified Multi-Objective Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/eafca59fcbabb555fdb5373e2f34385e-Paper-Conference.pdf)

### Associated with
- **Preference prediction** (behaviors tasks)
  > "Given a prompt x and two responses yi and yj, the probability that yi is preferred to yj is computed by"
  - [Rethinking Reward Model Evaluation: Are We Barking up the Wrong Tree?](https://proceedings.iclr.cc/paper_files/paper/2025/file/93f250215e4889119807b6fac3a57aec-Paper-Conference.pdf)
