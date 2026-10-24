# Zlib
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** zlibMIA  

## State of the Field

Across the provided sources, Zlib is characterized as a method for pretraining data detection, also referred to as a membership inference method. It is operationalized as a likelihood-based procedure that uses zlib compression entropy to normalize a model-derived score for a given input. The specific calculation is described in slightly different ways: one paper frames it as using the "ratio of example perplexity and zlib compression entropy," while another describes it as a "loss-calibration-based" approach that "divides the model’s loss by the zlib compression entropy of the input." The stated purpose of this normalization is to account for input complexity. In one context, Zlib is presented as a "baseline method" for its task.

## Sources

**[Fine-tuning can Help Detect Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/98cda3e39e4ca2da449092a99c485e1a-Paper-Conference.pdf)**
> A likelihood-based detection procedure that uses the ratio of example perplexity and zlib compression entropy for pretraining data detection.

**[Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf) (as "zlibMIA")**
> A specific type of Membership Inference Attack that uses a model's loss on a sample, normalized by the sample's zlib compression size, to infer membership.

## Relationships

### → Zlib
- **Pre-training data detection** (behaviors tasks) — *measured_by*
  > methods that compare a sample’s loss to its zlib compression entropy (Zlib (Carlini et al., 2021)) (Section 5.1)
  - [A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf)
- **Privacy leakage** (behaviors tasks) — *measured_by*
  > Table 2 shows that across all three attackers (lossMIA, zlibMIA, and Min-K%), all six unlearning methods and original model (no unlearning), the privacy leakage measure is significantly larger when unlearning canaries and minorities on Enron-Phone dataset for GPT-2 and Llama-2 7B respectively. (Section 6.1)
  - [Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf)
