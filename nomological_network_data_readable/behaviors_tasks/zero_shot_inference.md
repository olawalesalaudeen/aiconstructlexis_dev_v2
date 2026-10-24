# Zero-shot inference
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing treats zero-shot inference as direct prediction at inference time, without dataset-specific retraining or labeled demonstrations. One usage describes segmentation on an unseen dataset with a supplied or customisable vocabulary, where "the model is trained on Ctrain and directly tested on Ctest"; another describes prediction from a human-designed instruction and explicitly characterizes the setup as "zero-shot, inference-only."

**Variants.** The observed variants fall into two settings: open vocabulary semantic segmentation on unseen datasets, and instruction-conditioned prompting without labeled demonstrations. Papers also describe the first setting as zero-shot inference on unseen datasets with customisable vocabulary, while the second is framed as conditioning on a human-designed instruction.

**Space of elicitation and scores.** No measurement instrument is linked to it. The papers therefore do not name a recurring instrument for eliciting or scoring zero-shot inference.

**What it is taken as evidence of.** The only construct linked to it in the papers is In-context learning, and that link is recorded as a claimed causal relationship from In-context learning to zero-shot inference, in a comparison where an unsupervised ICL method is said to improve upon zero-shot inference by using self-generated context examples. The only linked behavioral indicator is Chain of thought, which one paper also connects through a claimed causal relationship to zero-shot inference, describing an approach that brings improvements upon zero-shot inference.

## Sources

**[Revisit the Open Nature of Open Vocabulary Semantic Segmentation](https://proceedings.iclr.cc/paper_files/paper/2025/file/17c89f4c14a4aa238616c126f5af19bb-Paper-Conference.pdf)**
> Producing segmentation predictions on an unseen dataset using a supplied vocabulary without dataset-specific retraining.

## Relationships

### Associated with
- **In-context learning** (constructs)
  > our unsupervised ICL method improves upon the zero-shot inference by using a few self-generated examples as a context that are labeled by the model itself, thus without requiring any labeled examples. (Section 2)
  - [Large (Vision) Language Models are Unsupervised In-Context Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e887bf77d0ba6db38802e552a0d81d2-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks)
  > “Zero-shot with Chain-of-Thought (CoT) incorporates CoT reasoning prompts to generate intermediate reasoning steps before the final answer”
  - [Large (Vision) Language Models are Unsupervised In-Context Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e887bf77d0ba6db38802e552a0d81d2-Paper-Conference.pdf)
