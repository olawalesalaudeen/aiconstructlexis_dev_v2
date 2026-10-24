# Min-K% method
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Min-k%, MinK%  

## State of the Field

The Min-K% method is most frequently characterized as a technique for pre-training data detection. Its operationalization is consistent across several papers: it scores a text by averaging either the lowest k-percent of its token probabilities or, equivalently, the highest k-percent of its token losses. This mechanism is based on the stated assumption that "trained data tends to contain fewer outlier tokens" with low probabilities. While pre-training data detection is the most common application, a number of papers also frame the method as a membership inference attack (MIA) used to assess privacy leakage. In this context, it is used to compare model confidence scores on different datasets, such as forget and holdout sets. Other reported applications include measuring dataset leakage and contamination. The provided data also identifies a variant, Min-K%++, described as a "novel and theoretically motivated methodology" for the same detection task.

## Sources

**[Fine-tuning can Help Detect Pretraining Data from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/98cda3e39e4ca2da449092a99c485e1a-Paper-Conference.pdf) (as "Min-k%")**
> A scoring function for pretraining data detection that computes the average log probability of the k% of tokens with the lowest predicted probabilities in a text.

**[Min-K%++: Improved Baseline for Pre-Training Data Detection from Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e3b4132ab2e0b7a21e6e75da7f91a9-Paper-Conference.pdf) (as "Min-K%")**
> A pre-training data detection method that scores a text by averaging the lowest k-percent of its token probabilities, based on the intuition that training texts are less likely to contain low-probability tokens.

**[Catastrophic Failure of LLM Unlearning via Quantization](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba79fb5c4fe70050752f20c90c5f07ca-Paper-Conference.pdf)**
> A member inference attack (MIA) technique used to assess privacy leakage by comparing model confidence scores on data from forget and holdout sets.

**[A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf) (as "MinK%")**
> A baseline detection method that averages the loss of the top-k% tokens with the highest loss to identify training samples.

## Relationships

### → Min-K% method
- **Privacy leakage** (behaviors tasks) — *measured_by*
  > "M3. PrivLeak, which assesses privacy preservation using the Min-K% method"
  - [Catastrophic Failure of LLM Unlearning via Quantization](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba79fb5c4fe70050752f20c90c5f07ca-Paper-Conference.pdf)
- **Pre-training data detection** (behaviors tasks) — *measured_by*
  > MinK% (Shi et al., 2023), which takes the average loss of the top k% tokens with the highest loss as the basis for detection (Section 5.1)
  - [A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf)
