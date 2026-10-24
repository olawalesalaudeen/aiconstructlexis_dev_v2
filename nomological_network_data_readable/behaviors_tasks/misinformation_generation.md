# Misinformation generation
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as producing false, misleading, or deceptive text with an LLM. Definitions largely agree on the output being misleading content, while some sharpen it to "convincing but deceptive" material used in social media campaigns or to obscure authentic discourse, and another definition explicitly includes both intentional and unintentional production. One study also frames malicious users knowingly prompting an LLM as the intentional scenario.

**Variants.** Papers describe several settings rather than a single fixed task. The named variants include misinformation generated in different types, domains, and errors, social media campaign content, and scenarios where the content arises intentionally through malicious prompting or unintentionally.

**Space of elicitation and scores.** No measurement instrument is linked to it. The linked material discusses the behavior directly as misleading or deceptive text generation, but none of the recorded relationships identify an instrument that elicits or scores it.

**What it is taken as evidence of.** In the linked relationships, papers position this behavior as an outcome rather than explicitly as evidence for a construct. The only linked construct is Model collapse, and one paper claims a causal relationship from Model collapse to misinformation generation, stating that training on synthetic data can lead a model to outputs that "contains misinformation." A separate paper claims a causal relationship from Hallucination to misinformation generation, describing hallucinated texts as a way normal users could unintentionally generate it.

## Sources

**[Large Language Models Threaten Language's Epistemic and Communicative Foundations](https://aclanthology.org/2025.emnlp-main.1457.pdf)**
> The generation of convincing but deceptive content, often for use in social media campaigns or to obscure authentic discourse.

## Relationships

### → Misinformation generation
- **Model collapse** (constructs) — *causes*
  > If synthetic data is used in training these models, even in small quantities, the model can start producing “gibberish” or nonsensical outputs, contains misinformation, or reflect stereotypes. (Section 1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > We propose to categorize the LLM-based misinformation generation methods into three types based on real-world scenarios (Table 1): Hallucination Generation (HG) (Section 3)
  - [Can LLM-Generated Misinformation Be Detected?](https://proceedings.iclr.cc/paper_files/paper/2024/file/94bbcb744bbada8808fda05b9d9290d6-Paper-Conference.pdf)
