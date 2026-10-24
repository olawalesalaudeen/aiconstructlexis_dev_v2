# Text generation quality
**Type:** Construct  
**Referenced in:** 119 papers  
**Also known as:** Generation quality, Content quality, Text Quality, Generative quality, Generator quality, Generative performance, Output effectiveness, Generative model quality, Conversation quality, Composition, Generation capacity, Overall quality, Professional response quality, Hypothesis quality, Storyline quality, Information quality, Overall satisfaction, Output quality, Response quality, Answer quality, Conversational quality, Sample quality, Text quality  

## State of the Field

**Definition agreement:** Consensus. Most papers define text generation quality as the overall or latent quality of a model's generated output, especially text responses, assessed holistically through recurring dimensions such as coherence, fluency, correctness, relevance, usefulness, and sometimes faithfulness. A few papers give narrower task-specific or non-text versions, but these are minor outliers and the dominant definition is the same core property of output quality.

**Space of definitions.** Across the surveyed work, the prevailing usage treats text generation quality as a broad, holistic property of generated outputs or responses, usually described through mixtures of coherence, fluency, relevance, accuracy, usefulness, informativeness, diversity, or human preference. Most definitions attach this property to the produced text itself, though some recast it as a latent ability or capacity of the model or generator to produce high-quality outputs. A smaller line of work narrows it to domain-specific or reference-dependent forms, such as survey content quality, conversation quality inferred from engagement and safety, storyline or information quality, composition ability, artistic merit, or preservation relative to an original, unwatermarked, or real-data reference, so the main disagreement is between a general holistic framing and narrower task- or reference-specific ones.

**Space of facets.** Papers often decompose this construct into recurring facets rather than treating it as a single opaque score: coverage, structure, and relevance for surveys; fluency, coherence, informativeness, and grammar in human ratings; and broader response criteria such as factual correctness, completeness, logical consistency, lack of bias, empathetic tone, and linguistic accuracy. Several labels are used for closely related ideas, including generation quality, response quality, text quality, output quality, overall quality, sample quality, and answer quality, and some papers explicitly define overall quality as an aggregate over multiple criteria. Other labels denote narrower subtypes, such as information quality through relevance, faithfulness, and hallucination, or composition for long-form writing, vocal composition, and combining symbolic primitives into valid expressions; a few papers also contrast quality with efficiency, latency, throughput, or cost.

**Space of measurement.** Operationalization is broad: papers link this construct to 19 measurement instruments and 6 behavioral indicators. The most recurrent named instruments are LLM-as-a-judge, MT-Bench, and AlpacaEval, and the most common linked behavioral indicators are text generation and instruction following. In practice, papers also use human ratings and reward models, pairwise win-rates, task metrics such as EM/F1, precision/recall, and RougeLSum, and proxies such as perplexity, MAUVE, TTR, diversity, coherence, fluency, or similarity to an original sampling distribution; some studies further score separate fluency or faithfulness dimensions. These operationalizations often match the broad definitions when they ask for holistic judgments, but some operationalize quality as task correctness or as preservation relative to a baseline model or distribution.

**Links.** Several papers claim a causal relationship from iterative refinement and chain of thought to text generation quality, and smaller lines of work make the same type of claim for other generation procedures; one paper separately claims a causal relationship from reward hacking to reduced quality. No correlational link is recorded. Papers also describe text generation quality as related to coherence and factuality, alongside several isolated related links to other constructs and behaviors.

## Sources

**[Aligning Large Language Models with Representation Editing: A Control Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/41bba7b0f5c81e789a20bb16a370aeeb-Paper-Conference.pdf) (as "Generation quality")**
> The overall quality of a model's generated text, often encompassing aspects like coherence, diversity, and fluency, independent of its alignment to specific objectives.

**[AutoSurvey: Large Language Models Can Automatically Write Surveys](https://proceedings.neurips.cc/paper_files/paper/2024/file/d07a9fc7da2e2ec0574c38d5f504d105-Paper-Conference.pdf) (as "Content quality")**
> The overall quality of a generated survey in terms of how comprehensively, coherently, and topically it is written.

**[Transfer Q-star : Principled Decoding for LLM Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/b8700a8a005032fe869c741b0a75274b-Paper-Conference.pdf) (as "Quality")**
> The overall goodness of a generated response, assessed through criteria like relevance, accuracy, and insightfulness.

**[Unlocking Tokens as Data Points for Generalization Bounds on Larger Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/11715d433f6f8b9106baae0df023deb3-Paper-Conference.pdf) (as "Text Quality")**
> The degree to which generated text is coherent, grammatical, and practically useful.

**[Uncovering Safety Risks of Large Language Models through Concept Activation Vector](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3a230d716e65afab578a8eb31a8d25f-Paper-Conference.pdf) (as "Response quality")**
> The overall quality of a model's generated response, encompassing aspects like linguistic correctness, usefulness, and relevance.

**[PALMBENCH: A COMPREHENSIVE BENCHMARK OF COMPRESSED LARGE LANGUAGE MODELS ON MOBILE PLATFORMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/a647405740b28a61311ac9cff28772e5-Paper-Conference.pdf) (as "Generative quality")**
> The overall quality and accuracy of the model's generated output, particularly when comparing a compressed version to its non-quantized original.

**[Beyond Model Collapse: Scaling Up with Synthesized Data Requires Verification](https://proceedings.iclr.cc/paper_files/paper/2025/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf) (as "Generator quality")**
> The latent ability of a model to produce high-quality synthesized outputs that can be useful if properly selected.

**[TidalDecode: Fast and Accurate LLM Decoding with Position Persistent Sparse Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/11440c427f0f76f191ac06b50d7a2517-Paper-Conference.pdf) (as "Generative performance")**
> The overall quality and accuracy of the text generated by the model across various tasks, which sparse attention methods aim to preserve.

**[Optimized Multi-Token Joint Decoding With Auxiliary Model for LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/438c34f45d7b5d82aef1b6016e695d5a-Paper-Conference.pdf) (as "Output effectiveness")**
> The general quality of a model's generated sequences, considered as a property distinct from the efficiency of the generation process.

**[LongWriter: Unleashing 10,000+ Word Generation from Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/59f278de1619bdb6b53fd04e8e0976e0-Paper-Conference.pdf) (as "Output quality")**
> A general latent trait representing the overall quality of a model's generated text, assessed across dimensions like relevance, accuracy, and coherence.

**[Maximizing the Potential of Synthetic Data: Insights from Random Matrix Theory](https://proceedings.iclr.cc/paper_files/paper/2025/file/7416573f05b50beac6d0aef3abc805c0-Paper-Conference.pdf) (as "Generative model quality")**
> The degree to which a generative model can produce high-fidelity synthetic data that accurately reflects the statistics of real data, influencing the performance of models trained on that data.

**[Beyond Autoregression: Fast LLMs via Self-Distillation Through Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/0f93c3e9b557980d93016671acd94bd2-Paper-Conference.pdf) (as "Text quality")**
> The overall quality of generated text, encompassing aspects like coherence, fluency, and correctness.

**[Broaden your SCOPE! Efficient Multi-turn Conversation Planning for LLMs with Semantic Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/32e41d6b0a51a63a9a90697da19d235d-Paper-Conference.pdf) (as "Conversation quality")**
> The overall value of a multi-turn conversation, which is inferred from cumulative rewards based on metrics such as user engagement and safety.

**[Beyond Outlining: Heterogeneous Recursive Planning for Adaptive Long-form Writing with Language Models](https://aclanthology.org/2025.emnlp-main.1254.pdf) (as "Composition")**
> The latent ability to generate coherent and structured text that meets specified stylistic, length, and organizational requirements.

**[Language Model Based Text-to-Audio Generation: Anti-Causally Aligned Collaborative Residual Transformers](https://aclanthology.org/2025.emnlp-main.1322.pdf) (as "Generation capacity")**
> The model's ability to effectively generate complex and high-fidelity outputs, particularly when dealing with a large number of predictive targets like deep RVQ layers.

**[From Generation to Judgment: Opportunities and Challenges of LLM-as-a-judge](https://aclanthology.org/2025.emnlp-main.138.pdf) (as "Overall quality")**
> A holistic judgment of a candidate output that summarizes multiple aspects into a single general assessment.

**[On the Role of Model Prior in Real-World Inductive Reasoning](https://aclanthology.org/2025.emnlp-main.534.pdf) (as "Hypothesis quality")**
> The latent trait reflecting how effectively a generated hypothesis captures meaningful patterns, supports downstream classification, and provides helpful or novel insights.

**[CogDual: Enhancing Dual Cognition of LLMs via Reinforcement Learning with Implicit Rule-Based Rewards](https://aclanthology.org/2025.emnlp-main.1389.pdf) (as "Storyline quality")**
> The overall coherence and fluency of the generated narrative, including logical flow and narrative development.

**[Certified Mitigation of Worst-Case LLM Copyright Infringement](https://aclanthology.org/2025.emnlp-main.1784.pdf) (as "Information quality")**
> The degree to which a model's output is relevant, faithful to source information, and free from fabrications.

**[Orchestrating Audio: Multi-Agent Framework for Long-Video Audio Synthesis](https://aclanthology.org/2025.emnlp-main.1133.pdf) (as "Overall satisfaction")**
> A human-perceived, holistic judgment of the quality and appropriateness of the generated audio for a given video.

**[Skeleton-of-Thought: Prompting LLMs for Efficient Parallel Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/03d7e13f0092405804f3a381ade8f3f0-Paper-Conference.pdf) (as "Answer quality")**
> The overall goodness of a model's generated response, assessed across multiple dimensions like helpfulness, correctness, and clarity.

**[NEFTune: Noisy Embeddings Improve Instruction Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4bdeeaeb380b35302bbda1823d328c22-Paper-Conference.pdf) (as "Conversational quality")**
> The degree to which model responses are fluent, informative, and preferred in dialogue settings, reflecting coherence, completeness, and naturalness.

**[Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf) (as "Sample quality")**
> The overall quality of generated text as judged by coherence and related generation properties.

**[Branch-GAN: Improving Text Generation with (not so) Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/02a92b52670752daf17b53f04f1ab405-Paper-Conference.pdf)**
> The latent ability of a language model to produce text that is coherent, fluent, and preferred by humans over alternatives, reflecting overall textual excellence beyond simple metric optimization.

## Relationships

### Text generation quality →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > These newly designed criteria leverage human judges or GPT-4 to better evaluate response quality. (Section 3.1)
  - [Uncovering Safety Risks of Large Language Models through Concept Activation Vector](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3a230d716e65afab578a8eb31a8d25f-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > Additionally, we evaluated the output quality of the LLM using MT-bench (Zheng et al., 2024) with its provided dataset.
  - [TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights](https://proceedings.iclr.cc/paper_files/paper/2025/file/7fb9f39075a5202472676a7531568212-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > The AlpacaEval dataset released by Dubois et al. (2023) is used to evaluate the overall quality of generations. (Section 3.3)
  - [NEFTune: Noisy Embeddings Improve Instruction Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4bdeeaeb380b35302bbda1823d328c22-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > "we randomly sample 100 cases and evaluate the results ... from four perspectives: fluency, coherence, informativeness, and grammar"
  - [Retrieval is Accurate Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a6610efd6c767f63343a4ab28505212e-Paper-Conference.pdf)
- **ArmoRM** (measurements) — *measured_by*
  > we assess response quality using reward models... we employ three state-of-the-art reward models from RewardBench (Lambert et al., 2024): ArmoRM-Llama3-8B-v0.1 (Wang et al., 2024a), Skywork-Reward-Llama-3.1-8B (Liu and Zeng, 2024), and Skywork-Reward-Gemma-2-27B (Liu and Zeng, 2024). (Section 4.2)
  - [Stronger Models are Not Always Stronger Teachers for Instruction Tuning](https://aclanthology.org/2025.naacl-long.224.pdf)
- **BARTScore** (measurements) — *measured_by*
  > "we use the BART score (Yuan et al., 2021) to evaluate response quality of different models" (Section 2.3)
  - [Hybrid LLM: Cost-Efficient and Quality-Aware Query Routing](https://proceedings.iclr.cc/paper_files/paper/2024/file/b47d93c99fa22ac0b377578af0a1f63a-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > For performance, we calculate the average response quality: ... where s(MRα(q)) represents an individual response quality score, such as correctness on golden-labeled datasets (e.g., MMLU) (Section 3.2)
  - [RouteLLM: Learning to Route LLMs from Preference Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/5503a7c69d48a2f86fc00b3dc09de686-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > We conduct comprehensive evaluations using AlpacaEval 2.0, Arena-Hard, MT-Bench, FLASK benchmarks for assessing the response quality across various dimensions.
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > We conduct comprehensive evaluations using AlpacaEval 2.0, Arena-Hard, MT-Bench, FLASK benchmarks for assessing the response quality across various dimensions.
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **FLASK** (measurements) — *measured_by*
  > We conduct comprehensive evaluations using AlpacaEval 2.0, Arena-Hard, MT-Bench, FLASK benchmarks for assessing the response quality across various dimensions.
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > Table 1: Response quality evaluation on BoolQ and AlpacaEval.
  - [Semantic Loss Guided Data Efficient Supervised Fine Tuning for Safe Responses in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/598ec93b6d2ed4fed4927b957b80f18c-Paper-Conference.pdf)
- **Generative perplexity** (measurements) — *measured_by*
  > In order to quantify sample quality, we use “generative perplexity”, a metric that computes the likelihood of generated samples under a more capable model... (Sec. 5.3)
  - [Generalized Interpolating Discrete Diffusion](https://raw.githubusercontent.com/mlresearch/v267/main/assets/von-rutte25a/von-rutte25a.pdf)
- **WikiText-2** (measurements) — *measured_by*
  > “For the base model, we evaluate the quality of text generation using the WikiText2 (Merity et al., 2016), PTB (Marcus et al., 1994), and C4 (Raffel et al., 2020) datasets.”
  - [QoS-Efficient Serving of Multiple Mixture-of-Expert LLMs Using Partial Runtime Reconfiguration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/imani25a/imani25a.pdf)
- **Human preference evaluation** (measurements) — *measured_by*
  > "We also conduct human evaluation on the general quality of the model responses on the combined test set described in Section 3.1"
  - [Self-Alignment with Instruction Backtranslation](https://proceedings.iclr.cc/paper_files/paper/2024/file/0f8e3534eb8dee7478d4dc0e9d9a0b1a-Paper-Conference.pdf)
- **HumanEval** (measurements) — *measured_by*
  > To validate that MTJD indeed betters output quality, we test MTJD (k=4) and standard multinomial sampling on Spider, MTBench, and HumanEval using the Llama-3 series models. ... For this process, the higher the scores, the better the downstream performance. (Section 5.1)
  - [Optimized Multi-Token Joint Decoding With Auxiliary Model for LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/438c34f45d7b5d82aef1b6016e695d5a-Paper-Conference.pdf)
- **WMT** (measurements) — *measured_by*
  > "Quality is measured in terms of BLEU for WMT"
  - [Faster Cascades via Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/6f43166f50f26e8d8f3edc5545b0749f-Paper-Conference.pdf)
- **CNN/DailyMail** (measurements) — *measured_by*
  > "Quality is measured in terms of BLEU for WMT and ROUGE-2 for XSum and CNNDM."
  - [Faster Cascades via Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/6f43166f50f26e8d8f3edc5545b0749f-Paper-Conference.pdf)
- **XSum** (measurements) — *measured_by*
  > "Quality is measured in terms of BLEU for WMT and ROUGE-2 for XSum and CNNDM."
  - [Faster Cascades via Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/6f43166f50f26e8d8f3edc5545b0749f-Paper-Conference.pdf)

### → Text generation quality
- **Iterative refinement** (behaviors tasks) — *causes*
  > "This iterative refinement process continues for several cycles until obtaining a more robust and comprehensive response."
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **Reward hacking** (behaviors tasks) — *causes*
  > This decline occurs because a large number of iterations at test time can lead to reward hacking, reducing the quality of the generated sentences. (Section 6.4)
  - [Aligning Large Language Models with Representation Editing: A Control Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/41bba7b0f5c81e789a20bb16a370aeeb-Paper-Conference.pdf)
- **Token diversity** (constructs) — *causes*
  > However, when we check the generated content, we discover that the quality is compromised by low token diversity
  - [Masked Diffusion Models are Secretly Time-Agnostic Masked Models and Exploit Inaccurate Categorical Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e3b203e72c4e058de26d02a92a81844-Paper-Conference.pdf)
- **Context utilization** (constructs) — *causes*
  > Radar utilizes context tokens dynamically in a principled manner, resulting in significantly higher generation quality
  - [Radar: Fast Long-Context Decoding for Any Transformer](https://proceedings.iclr.cc/paper_files/paper/2025/file/3c44405d619a6920384a45bce876b41e-Paper-Conference.pdf)
- **Response aggregation** (behaviors tasks) — *causes*
  > "Aggregators are models proficient in synthesizing responses from other models into a single, high-quality output."
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
- **Stealthiness** (constructs) — *causes*
  > Moreover, preserving the text distribution inherently implies maintaining the quality of the generated text.
  - [StealthInk: A Multi-bit and Stealthy Watermark for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jiang25j/jiang25j.pdf)
- **Prompt quality** (constructs) — *causes*
  > low-quality input prompts result in high variance and low quality responses (Abstract).
  - [R.I.P.: Better Models by Survival of the Fittest Prompts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25u/yu25u.pdf)
- **Self-evaluation** (behaviors tasks) — *causes*
  > This result suggests that evaluation can potentially improve the quality of the generated text, which serves as a stepping stone for building RLC method. (Section 4.3)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)

### Associated with
- **Text generation** (behaviors tasks)
  > "we also demonstrate improved generation quality in open-ended text generation"
  - [Retrieval is Accurate Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a6610efd6c767f63343a4ab28505212e-Paper-Conference.pdf)
- **Generation diversity** (constructs)
  > Decoding-based approaches offer greater adaptability but face a fundamental diversity–quality trade-off. (Section 1)
  - [G2: Guided Generation for Enhanced Output Diversity in LLMs](https://aclanthology.org/2025.emnlp-main.713.pdf)
- **Language modeling ability** (constructs)
  > While we believe that perplexity measurements and generation quality are strongly related, this is a hypothesis we aim to investigate in future work. (Section 6)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **Generalization** (constructs)
  > the generation quality of GPT4 decreases as the logical constraints become more complex, while the generation quality of Ctrl-G stays relatively consistent across all settings, demonstrating strong generalization performance. (Sec 5.2)
  - [Adaptable Logical Control for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d15c16cf5619a2b1606da5fc88e3f1a9-Paper-Conference.pdf)
- **Reward overoptimization** (constructs)
  > The coherence and diversity metrics drop to nearly zero, which is evidence of reward overoptimization. (Section 6.3)
  - [Aligning Large Language Models with Representation Editing: A Control Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/41bba7b0f5c81e789a20bb16a370aeeb-Paper-Conference.pdf)
- **Factuality** (constructs)
  > The complexity arises from the inherent subjectivity of “quality” in text generation, which often depends on multiple factors such as relevance, coherence, factual accuracy, and fluency.
  - [SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf)
- **Safety** (constructs)
  > In such applications, the quality (e.g., user engagement, safety) of a conversation is important and can only be exactly known at the end of the conversation. (ABSTRACT)
  - [Broaden your SCOPE! Efficient Multi-turn Conversation Planning for LLMs with Semantic Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/32e41d6b0a51a63a9a90697da19d235d-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > achieving an optimal trade-off between instruction adherence and output quality. (Section 1)
  - [Sparse Activation Editing for Reliable Instruction Following in Narratives](https://aclanthology.org/2025.emnlp-main.1311.pdf)
- **Readability** (constructs)
  > Text quality is measured by absolute perplexity difference (|∆PPL|), Flesch reading ease score (Flesch), and semantic similarity (Sim) between the attacked and original text. Lower detection accuracy (↓) indicates better evasion, while higher Flesch and Sim scores (↑) reflect better readability and semantic preservation.
  - [TempParaphraser: ``Heating Up'' Text to Evade AI-Text Detection through Paraphrasing](https://aclanthology.org/2025.emnlp-main.1607.pdf)
- **Semantic preservation** (constructs)
  > Text quality is measured by absolute perplexity difference (|∆PPL|), Flesch reading ease score (Flesch), and semantic similarity (Sim) between the attacked and original text. Lower detection accuracy (↓) indicates better evasion, while higher Flesch and Sim scores (↑) reflect better readability and semantic preservation.
  - [TempParaphraser: ``Heating Up'' Text to Evade AI-Text Detection through Paraphrasing](https://aclanthology.org/2025.emnlp-main.1607.pdf)
- **Collaboration ability** (constructs)
  > "we identify an inherent phenomenon we term the collaborativeness of LLMs — wherein an LLM tends to generate better responses when presented with outputs from other models"
  - [Mixture-of-Agents Enhances Large Language Model Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/5434be94e82c54327bb9dcaf7fca52b6-Paper-Conference.pdf)
