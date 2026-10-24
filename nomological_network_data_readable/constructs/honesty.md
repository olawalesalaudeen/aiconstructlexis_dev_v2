# Honesty
**Type:** Construct  
**Referenced in:** 42 papers  
**Also known as:** Sincerity  

## State of the Field

**Definition agreement:** Consensus. Most papers define honesty as a model-level tendency to produce truthful, factually accurate, non-deceptive responses, often with the closely related expectation that it avoids fabrication and acknowledges uncertainty or abstains when it lacks knowledge. A few papers emphasize confidence expression or consistency with internal knowledge, but these are minority variants and do not amount to a substantial alternative use of the construct.

**Space of definitions.** Across the papers, the prevailing usage treats honesty as a latent model trait or disposition to give truthful, factually accurate, non-deceptive responses. Many definitions also fold in acknowledging limits, via saying "I don't know," abstaining, declining to answer when information is insufficient, avoiding hallucinations, or candidly disclosing limitations and knowledge extent. Smaller strands narrow it to consistency with the model's own beliefs or internal knowledge, define it as evidence-backed sincerity during cooperation, or frame it as stated confidence matching true accuracy through epistemic markers; most definitions describe a property of the model, though a few describe the degree to which outputs score on preference axes.

**Space of facets.** Papers usually place honesty alongside helpfulness and harmlessness as one of the 3H or HHH alignment principles, and one paper expands that bundle into five fine-grained alignment perspectives. Some nearby labels are treated as close or overlapping: one survey uses sincerity for doing what one believes to be true without deception and with sufficient evidence. At the same time, papers do not fully collapse adjacent constructs, because one explicitly contrasts honesty with truthfulness, saying honesty is about stating what the model believes while truthfulness is about stating what is objectively true, and another relates calibration to honesty as a finer-grained handling of uncertainty on known questions.

**Space of measurement.** Papers link honesty to 4 measurement instruments and 3 behavioral indicators. The most frequent instruments are UltraFeedback, a GPT-4 preference dataset that includes an "Honest" objective, LLM-as-a-judge evaluation over honesty and related preference dimensions, and the benchmark-style datasets TriviaQA and TruthfulQA; behavioral operationalizations center on refusal and other indicators tied to saying "I don't know" or minimizing hallucinations. These measures mostly track factual accuracy, truthfulness, and limitation acknowledgment, so they line up most closely with the dominant definitions rather than the smaller lines focused on internal-belief consistency or confidence calibration.

**Links.** Papers most often relate honesty to calibration and human preference alignment. In the alignment papers, it appears as one of the 3H or HHH principles, while the calibration papers describe uncertainty expression as a finer-grained way of handling known questions. Beyond that, honesty is related to refusal, one paper reports that harmlessness correlates with honesty via a potential trade-off, and one paper claims a causal relationship from honesty to trustworthiness. Most remaining links are recorded as related links across the 10 linked constructs and 3 linked behavioral indicators.

## Sources

**[AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf)**
> A desirable model trait encompassing truthfulness and the ability to acknowledge when it lacks information, for instance by abstaining from answering or avoiding hallucinations.

**[How to Enable Effective Cooperation Between Humans and NLP Models: A Survey of Principles, Formalizations, and Beyond](https://aclanthology.org/2025.acl-long.22.pdf) (as "Sincerity")**
> The latent tendency of a model to provide truthful and evidence-backed responses without deception during cooperation with humans.

## Relationships

### Honesty →
- **UltraFeedback** (measurements) — *measured_by*
  > UltraFeedback [7]: a multi-aspect alignment dataset with 64K prompts with preferences obtained from GPT-4, including "Instruction following", "Honest", "Truthful", and "Helpful" objectives (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > Results of LLaMA2-Chat-13B on the TriviaQA evaluation set are shown in Tab. 3... enhance the honesty score
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Trustworthiness** (constructs) — *causes*
  > honesty—defined as consistently delivering accurate information and refraining from deceiving users—plays a crucial role in ensuring the trustworthy deployment of LLMs in real-world applications. (Section 1)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > “we conduct a one-shot ‘first-past-the-post’ (FPP)-style assessment with GPT-4o as the judge ... for quality ratings on a Likert scale between 1 to 5 ... including overall performance, honesty, helpfulness, truthfulness, and safety”
  - [DPL: Diverse Preference Learning Without A Reference Model](https://aclanthology.org/2025.naacl-long.190.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > For honesty, we utilize the TruthfulQA dataset (Lin et al., 2021) (Section 4.1).
  - [Too Helpful, Too Harmless, Too Honest or Just Right?](https://aclanthology.org/2025.emnlp-main.1510.pdf)

### → Honesty
- **Harmlessness** (constructs) — *correlates*
  > MiniGPT-v2 exhibits strong safety across several dimensions but underperforms on Truthfulness, suggesting a potential trade-off between honesty and harmlessness.
  - [MLLMGuard: A Multi-dimensional Safety Evaluation Suite for Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d9dcd4ebef57f1839d871fe7d891e91-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Human preference alignment** (constructs)
  > Additionally, we found SALMON capable to emphasize the distinct aspects of the alignment with respect to being Helpful, Honest, and Harmless) (HHH) (Askell et al., 2021) by customizing its preference principles.
  - [SALMON: Self-Alignment with Instructable Reward Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/dda5cac5272a9bcd4bc73d90bc725ef1-Paper-Conference.pdf)
- **Refusal** (behaviors tasks)
  > In this paper, we argue for the importance of alignment for honesty, ensuring that LLMs proactively refuse to answer questions when they lack knowledge, while still not being overly conservative. (Abstract)
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Calibration** (constructs)
  > At its most basic level, the AI should provide accurate information, be well-calibrated, and express appropriate levels of uncertainty rather than misleading users. (Section 2)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **Abstention** (behaviors tasks)
  > LMMs must be ... honest (e.g., abstention or the ability to say I don’t know...)
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Truthfulness** (constructs)
  > According to Evans et al. (2021); Park et al. (2023), honesty entails a model stating what it believes, while an adjacent concept, truthfulness, demands it to state what is objectively true. (Section 5.1)
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks)
  > we first refine and extend the definition of honesty in LLMs based on the definition proposed by Askell et al. [14], as the ability to recognize their limitations, remain objective without pandering, and thereby avoid spreading misinformation or inducing hallucinations. (Section 1)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **Self-awareness** (constructs)
  > Crucially, the AI should be honest about its capabilities and knowledge levels. This requires LLMs to have an awareness of their operational limits, a point highlighted by Huang et al. [19] which noted the general unawareness of LLMs to utilize external tools effectively. (Section 2)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **Sycophancy** (constructs)
  > Such behavior compromises the truthfulness of LLMs; therefore, reducing sycophancy is a critical measure for enhancing the honesty of LLMs [13]. (Section 2)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **World knowledge** (constructs)
  > Model A is more honest than model B IFF it exhibits statistically superior performance on measures of world knowledge (Section 5).
  - [Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)
- **Confidence expression** (behaviors tasks)
  > the expression of uncertainty can serve as a valuable indicator of honesty, and we view calibration from the perspective of model knowledge as a finer-grained handling of knowns
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
