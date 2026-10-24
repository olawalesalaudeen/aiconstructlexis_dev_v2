# Toxicity
**Type:** Construct  
**Referenced in:** 53 papers  
**Also known as:** Non-toxicity, Anti-toxicity  

## State of the Field

**Definition agreement:** Consensus. Most papers define toxicity as a latent tendency, propensity, or degree of a model or its generated text being harmful, offensive, rude, disrespectful, explicit, or otherwise inappropriate. A few papers use the term for avoidance of such content, community discourse hostility, or an unrelated poisoned-data property, but these are clear minority outliers relative to the dominant shared definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats toxicity as a latent tendency, risk, or propensity in a model or its outputs: generating or containing harmful, offensive, inappropriate, rude, hateful, or otherwise undesirable language, often when particular prompts elicit it. Papers using this framing vary mainly in whether they locate the property in the model, the generated text, or the content being scored, and in the examples they foreground, such as threats, obscenity, insults, explicitness, humiliation, or stereotype-perpetuating language. A smaller line of work narrows toxicity to hostility and aggression in community discourse, frames the inverse trait as non-toxicity or anti-toxicity, or describes it as an ability to identify and avoid offensive material; one paper uses the same term for a poisoned sample that is easy to retrieve and induces wrong responses.

**Space of facets.** When papers break the construct down, the clearest subtype scheme lists toxic, severe toxic, obscene, threat, insult, and identity hate. Other papers use overlapping facet vocabularies, describing toxicity through threatening, sexually explicit, profane, stereotype-perpetuating, hateful, violent, or abusive language, and some frame it as avoiding such material rather than producing it; one interaction-log study also treats sexual content as the most prevalent toxicity type under its moderation tool. Several papers place toxicity inside broader evaluative families: social bias work contrasts Stereotyping and Toxicity as distinct harms, and other work treats toxicity as one component of Safety or Trustworthiness. Around the same entity, non-toxicity names avoiding harmful outputs, while anti-toxicity names neural components opposed to toxic representations.

**Space of measurement.** Papers link toxicity to 12 measurement instruments and one behavioral indicator. The most common operationalizations are Perspective API, RealToxicityPrompts, Detoxify, ToxiGen, and LLM-as-a-judge, plus 7 other instruments. The linked instruments are mostly automated detectors and benchmarks, with some LLM-as-a-judge use and no linked human evaluation instrument: models are commonly prompted with elicitation sets such as RealToxicityPrompts or ToxiGen and their continuations are scored by tools such as Perspective API or Detoxify, while the remaining instruments include moderation APIs and datasets for images, sentence pairs, and broader safety or toxicity testing. These measurements mostly operate at the level of observed outputs or elicited behavior, even when definitions describe toxicity as a latent model tendency or, less commonly, an avoidance ability.

**Links.** Across linked relationships, toxicity connects to 5 constructs and one behavioral indicator, and no causal claim appears. Safety is related to Toxicity, Social bias is related to Toxicity and sometimes contrasted with Stereotyping as a separate harm type, and one paper reports Stereotyping correlates with Toxicity. Toxicity is also related to Trustworthiness as one component in a broader framework, Political bias is related to Toxicity in one paper, and one paper relates Toxicity to a behavioral indicator about generating harmful or toxic text.

## Sources

**[Large Language Models can Become Strong Self-Detoxifiers](https://proceedings.iclr.cc/paper_files/paper/2025/file/10df3b90b7caf44bf96b5a542a6935fe-Paper-Conference.pdf)**
> The latent property or risk of a model generating harmful, offensive, or inappropriate content.

**[Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf) (as "Non-toxicity")**
> The latent trait of a language model to avoid generating harmful or offensive content, especially in response to malicious or provocative prompts.

**[How Does DPO Reduce Toxicity? A Mechanistic Neuron-Level Analysis](https://aclanthology.org/2025.emnlp-main.1501.pdf) (as "Anti-toxicity")**
> The latent tendency of a language model to suppress or counteract toxic content generation, manifested through increased activation of neural components geometrically opposed to toxic representations.

## Relationships

### Toxicity →
- **Perspective API** (measurements) — *measured_by*
  > Our evaluation mechanism employs the Perspective API2, which classifies text based on six delineated toxicity attributes. (Section 5.1)
  - [Unveiling and Manipulating Prompt Influence in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/77c6ccacfd9962e2307fc64680fc5ace-Paper-Conference.pdf)
- **RealToxicityPrompts** (measurements) — *measured_by*
  > We then prompt all models with “I don’t care if this is controversial” and a prompt from RealToxicityPrompts (Gehman et al., 2020).
  - [Model Merging by Uncertainty-Based Gradient Matching](https://proceedings.iclr.cc/paper_files/paper/2024/file/327b9b8d4e45c3f81568e11ffc505f77-Paper-Conference.pdf)
- **Detoxify** (measurements) — *measured_by*
  > We detect unsafe content using two toxicity classification tools: the OpenAI Moderation API and Detoxify (Section 4).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **ToxiGen** (measurements) — *measured_by*
  > We rely on ToxiGen [13] for assessing the model’s toxicity.
  - [Spectral Editing of Activations for Large Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/684c59d614fe6ae74a3be8c3ef07e061-Paper-Conference.pdf)
- **OpenAI Moderation API** (measurements) — *measured_by*
  > We detect unsafe content using two toxicity classification tools: the OpenAI Moderation API and Detoxify (Section 4).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We evaluate Toxicity and Hallucination using GPT-4o OpenAI (2023) and Claude-3.5-Sonnet Anthropic (2023) through an LLM-as-a-judge approach, as shown in Table 4 and Table 5. (Section 4.7)
  - [PALMBENCH: A COMPREHENSIVE BENCHMARK OF COMPRESSED LARGE LANGUAGE MODELS ON MOBILE PLATFORMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/a647405740b28a61311ac9cff28772e5-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > We evaluate the Spectra suite across various safety and toxicity benchmarks of TruthfulQA (Lin et al., 2021), Big Bench BBQ Lite (Parrish et al., 2022) and CrowsPairs (Nangia et al., 2020). (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **BBQ Lite** (measurements) — *measured_by*
  > We evaluate the Spectra suite across various safety and toxicity benchmarks of TruthfulQA (Lin et al., 2021), Big Bench BBQ Lite (Parrish et al., 2022) and CrowsPairs (Nangia et al., 2020). (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **CrowS-Pairs** (measurements) — *measured_by*
  > We evaluate the Spectra suite across various safety and toxicity benchmarks of TruthfulQA (Lin et al., 2021), Big Bench BBQ Lite (Parrish et al., 2022) and CrowsPairs (Nangia et al., 2020). (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **Llama Guard** (measurements) — *measured_by*
  > To measure effectiveness of each method, we compute the toxicity rate which is the percentage of generated prompts that are toxic. We consider a prompt toxic if the toxicity classifier $p_\psi$ assigns a score greater than 0.5 to an input pair consisting of the prompt x and response y generated by the target LLM. For $p_\psi$, we use a RoBERTa hate speech classifier (Vidgen et al., 2021) for GPT-2 and dolly-v2-7b, and Llama-Guard (Inan et al., 2023) for Llama-2-7b-chat, Llama-3.1-8B-Instruct, and Gemma-2b-it.
  - [Learning Diverse Attacks on Large Language Models for Robust Red-Teaming and Safety Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e128701ceca0ba03658a305faf39deb-Paper-Conference.pdf)
- **ParaDetox** (measurements) — *measured_by*
  > "we use the ParaDetox dataset (Logacheva et al., 2022) containing pairwise “non-toxic” and “toxic” sentences"
  - [Breaking Bad Tokens: Detoxification of LLMs Using Sparse Autoencoders](https://aclanthology.org/2025.emnlp-main.641.pdf)
- **Activation patching** (measurements) — *measured_by*
  > we apply activation patching (Zhang and Nanda, 2024) in a counterfactual manner to isolate the effect of specific neurons on toxicity scores. (Section 3.3)
  - [How Does DPO Reduce Toxicity? A Mechanistic Neuron-Level Analysis](https://aclanthology.org/2025.emnlp-main.1501.pdf)
- **ALERT** (measurements) — *measured_by*
  > We evaluate the toxicity of the model using the ALERT (Tedeschi et al., 2024) benchmark... (Section 5.4)
  - [Aligning Spoken Dialogue Models from User Interactions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25t/wu25t.pdf)

### → Toxicity
- **Self-correction** (behaviors tasks) — *causes*
  > The results in Table 3 demonstrate that 1) CRITIC substantially lowers the occurrence of toxic generations, while preserving fluency and diversity as the vanilla LLMs. (Section 4.3 Results)
  - [CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf)

### Associated with
- **Safety** (constructs)
  > Two most significant topics in the literature of large model safety [124, 132] are the toxicity of AI-generated content [47], which could greatly impact user interactions, and model jailbreaking (Sec. 2.2.2)
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Social bias** (constructs)
  > Our categorization of social bias types in LLMs is structured around two distinct types of harms: Stereotyping and Toxicity.
  - [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)
- **Political bias** (constructs)
  > Feng et al. (2023) observed that politically biased language models tend to “propagate social biases into hate speech predictions,” suggesting a link between political bias and toxicity. (Section 3.6)
  - [UniDetox: Universal Detoxification of Large Language Models via Dataset Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4800e97411c7f199b2895425f2933a5-Paper-Conference.pdf)
- **Trustworthiness** (constructs)
  > These components [truthfulness, toxicity, fairness, robustness, privacy, and machine ethics] collectively contribute to a comprehensive framework for assessing and improving LLM trustworthiness. (Section 2)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
