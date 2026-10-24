# LOSS
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** lossMIA  

## State of the Field

Based on the provided data, LOSS is presented as a baseline membership inference attack. The method is defined as a technique for classifying data membership by calculating the average next-token loss across a sequence. As detailed in "Context-Aware Membership Inference Attacks against Pre-trained Large Language Models," this approach involves computing this average loss and then classifying a sequence as a member of the training data if the resulting score is below a specified threshold (τ). The paper attributes this technique to Yeom et al. (2018).

## Sources

**[Context-Aware Membership Inference Attacks against Pre-trained Large Language Models](https://aclanthology.org/2025.emnlp-main.370.pdf)**
> A baseline membership inference attack that classifies membership based on average next-token loss across a sequence.

**[Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf) (as "lossMIA")**
> A specific type of Membership Inference Attack that uses a model's loss on a given sample to infer whether that sample was part of the training data.

## Relationships

### → LOSS
- **Pre-training data detection** (behaviors tasks) — *measured_by*
  > LOSS (Yeom et al., 2018), which uses the auto-regressive loss of a sample to determine whether it has been seen during training; (Section 5.1)
  - [A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf)
- **Privacy leakage** (behaviors tasks) — *measured_by*
  > Table 2 shows that across all three attackers (lossMIA, zlibMIA, and Min-K%), all six unlearning methods and original model (no unlearning), the privacy leakage measure is significantly larger when unlearning canaries and minorities on Enron-Phone dataset for GPT-2 and Llama-2 7B respectively. (Section 6.1)
  - [Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf)
