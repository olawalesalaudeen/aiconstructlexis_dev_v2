# Harmful content detection
**Type:** Behavior  
**Referenced in:** 36 papers  
**Also known as:** Harmful meme detection, Offensive language detection, Toxicity detection, Threat detection, Abusive language detection, Instruction classification, Unsafe content detection, Harmful prompt classification, Prompt Classification, Toxicity classification, Harmful prompt detection, Safety filtering, Harmful request discrimination, Unsafe intent identification, Problematic turn detection, Violent communication detection, Harmfulness detection, Risk identification, Offensive content detection, Toxic content detection, Risk detection, Prompt safety classification  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is binary classification of text or prompts as harmful, unsafe, toxic, offensive, abusive, threatening, or benign and safe, often with single-label outputs such as "1/0" or "OFF/NOT_OFF". Most papers apply this to the input alone, but some extend the scope to instruction-response pairs or to checking both model inputs and outputs, including safety filtering that blocks malicious jailbreak attempts. A smaller line of work scores the behavior with an unsafe probability, assigns a risk category, or elicits an explicit articulated judgment about whether a request is harmful.

**Variants.** Papers use overlapping names for several variants. One common cluster covers text-only moderation tasks such as offensive language, toxicity, threat, abuse, or problematic-turn detection, sometimes at the level of sentences, comments, tweets, or tokens. Another cluster focuses on prompt safety, including harmful prompt or prompt safety classification, instruction-only classification, instruction-response pair classification, harmful request discrimination, and risk identification. A smaller multimodal strand covers harmful meme detection and multimodal risk or unsafe-intent detection over image-text inputs, and one line extends harmful prompt detection across languages, images, and audio.

**Space of elicitation and scores.** Papers link this behavior to 21 measurement instruments. The most frequently linked are ToxicChat and XSTest, followed by AdvBench, OpenAI Moderation API, and AIAH; these are used as public benchmarks or datasets for prompt, text, or audio safety classification. The remaining linked instruments span meme datasets, adversarial prompt sets, and multilingual or multimodal benchmarks.

**What it is taken as evidence of.** Among the six linked constructs, only Safety is explicitly measured by this behavior: one paper says the task "can be used to evaluate the safety of LLMs." Other linked constructs are not framed uniformly. Contextual understanding, Cultural knowledge, and Safety alignment are each linked by recorded causal claims directed toward harmful content detection, Generalization is reported to correlate with it, and one additional safety-related construct is linked by a causal claim from harmful content detection to that construct.

## Sources

**[Towards Comprehensive Detection of Chinese Harmful Memes](https://proceedings.neurips.cc/paper_files/paper/2024/file/17fc467c11997914127c001fdc801bea-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Harmful meme detection")**
> The observable task of performing binary classification on a multimodal meme (image and text) to determine if it is harmful or benign.

**[CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf) (as "Offensive language detection")**
> Classifying a text as offensive or not offensive based on its content.

**[CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf) (as "Toxicity detection")**
> Classifying text as toxic or non-toxic.

**[CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf) (as "Threat detection")**
> Classifying text as containing threats or not.

**[CultureLLM: Incorporating Cultural Differences into Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a16935bf54c4af233e25d998b7f4a2c-Paper-Conference.pdf) (as "Abusive language detection")**
> Classifying text as abusive or non-abusive.

**[HarmAug: Effective Data Augmentation for Knowledge Distillation of Safety Guard Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac2d4db1615bf3736f44a1b4889e666b-Paper-Conference.pdf)**
> The observable task of classifying a given input, such as an instruction or an instruction-response pair, as harmful or not.

**[HarmAug: Effective Data Augmentation for Knowledge Distillation of Safety Guard Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac2d4db1615bf3736f44a1b4889e666b-Paper-Conference.pdf) (as "Instruction classification")**
> A specific classification task where the model determines the harmfulness of a user instruction alone, with the response being an empty sequence.

**[$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf) (as "Unsafe content detection")**
> The observable task of assigning a probability of being unsafe to a given text prompt, based on its adherence to safety policies.

**[Beyond Mere Token Analysis: A Hypergraph Metric Space Framework for Defending Against Socially Engineered LLM Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/18699b47bb4abf5f92b0b73266b3ffc8-Paper-Conference.pdf) (as "Harmful prompt classification")**
> The task of identifying and categorizing input prompts as either harmful/malicious or benign/safe.

**[Beyond Mere Token Analysis: A Hypergraph Metric Space Framework for Defending Against Socially Engineered LLM Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/18699b47bb4abf5f92b0b73266b3ffc8-Paper-Conference.pdf) (as "Prompt Classification")**
> The system assigning a label (harmful or benign) to an input prompt based on its geometric representation.

**[BadJudge: Backdoor Vulnerabilities of LLM-As-A-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e48f562a2c8f64c7404a6c3a518af74-Paper-Conference.pdf) (as "Toxicity classification")**
> The task of classifying a given text prompt or response as either toxic/unsafe or non-toxic/safe.

**[Explaining the role of Intrinsic Dimensionality in Adversarial Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altinisik25a/altinisik25a.pdf) (as "Safety filtering")**
> Detecting and rejecting harmful or unsafe user prompts before they are processed by a generative model, implemented using encoder-based LLMs as classifiers.

**[Explaining the role of Intrinsic Dimensionality in Adversarial Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altinisik25a/altinisik25a.pdf) (as "Harmful prompt detection")**
> The task of identifying user prompts that are designed to elicit harmful or unsafe responses from a language model.

**[SDGO: Self-Discrimination-Guided Optimization for Consistent Safety in Large Language Models](https://aclanthology.org/2025.emnlp-main.253.pdf) (as "Harmful request discrimination")**
> The model's explicit judgment of whether a user input constitutes a harmful or dangerous request, typically expressed in structured safety assessments.

**[Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf) (as "Unsafe intent identification")**
> The observable process of a model recognizing and articulating the potentially harmful or risky nature of a user's request.

**[Words Like Knives: Backstory-Personalized Modeling and Detection of Violent Communication](https://aclanthology.org/2025.emnlp-main.586.pdf) (as "Problematic turn detection")**
> Classifying whether a conversational turn is harmful or conflict-inducing based on linguistic and contextual cues.

**[Can an Individual Manipulate the Collective Decisions of Multi-Agents?](https://aclanthology.org/2025.emnlp-main.611.pdf) (as "Harmfulness detection")**
> Classifying a prompt as harmful or safe.

**[MCIP: Protecting MCP Safety via Model Contextual Integrity Protocol](https://aclanthology.org/2025.emnlp-main.62.pdf) (as "Risk identification")**
> The model's observable output when classifying whether a given interaction is safe or unsafe, or assigning it to a specific risk category.

**[V-VAE: A Variational Auto Encoding Framework Towards Fine-Grained Control over Human-Like Chat](https://aclanthology.org/2025.emnlp-main.1508.pdf) (as "Offensive content detection")**
> The task of identifying harmful, inappropriate, or offensive content in text.

**[ECC: An Emotion-Cause Conversation Dataset for Empathy Response](https://aclanthology.org/2025.emnlp-main.306.pdf) (as "Toxic content detection")**
> Identifying and filtering out biased, discriminatory, or violent material in generated dialogues using automated tools like Rewire API.

**[DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.604.pdf) (as "Risk detection")**
> The observable task of identifying and flagging whether a given multimodal input contains risky or harmful content.

**[SafetyAnalyst: Interpretable, Transparent, and Steerable Safety Moderation for AI Behavior](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bw/li25bw.pdf) (as "Prompt safety classification")**
> The task of categorizing a given user prompt as either safe or unsafe for an AI to respond to.

## Relationships

### Harmful content detection →
- **ToxicChat** (measurements) — *measured_by*
  > We evaluate the guardrail models on six datasets including five standard safety datasets (OpenAI Mod (Markov et al., 2023),ToxicChat (Lin et al., 2023), XSTest (Röttger et al., 2023), Overkill (Shi et al., 2024), BeaverTails (Ji et al., 2024)) and (2) our novel safety dataset TwinSafety. (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **XSTest** (measurements) — *measured_by*
  > We evaluate the guardrail models on six datasets including five standard safety datasets (OpenAI Mod (Markov et al., 2023),ToxicChat (Lin et al., 2023), XSTest (Röttger et al., 2023), Overkill (Shi et al., 2024), BeaverTails (Ji et al., 2024)) and (2) our novel safety dataset TwinSafety. (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **OpenAI Moderation dataset** (measurements) — *measured_by*
  > We evaluate the guardrail models on six datasets including five standard safety datasets (OpenAI Mod (Markov et al., 2023),ToxicChat (Lin et al., 2023), XSTest (Röttger et al., 2023), Overkill (Shi et al., 2024), BeaverTails (Ji et al., 2024)) and (2) our novel safety dataset TwinSafety. (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **Hateful Memes** (measurements) — *measured_by*
  > We use three publicly available meme datasets for evaluation: (1) HarM (Pramanick et al., 2021a), (2) FHM (Kiela et al., 2020), and (3) MAMI (Fersini et al., 2022). (Section 4.1)
  - [MIND: A Multi-agent Framework for Zero-shot Harmful Meme Detection](https://aclanthology.org/2025.acl-long.46.pdf)
- **AdvBench** (measurements) — *measured_by*
  > (1) Harmfulness Detection (AdvBench): classify prompts as “harmful” or “safe” (Section 4.6)
  - [Can an Individual Manipulate the Collective Decisions of Multi-Agents?](https://aclanthology.org/2025.emnlp-main.611.pdf)
- **BeaverTails** (measurements) — *measured_by*
  > We evaluate the guardrail models on six datasets including five standard safety datasets (OpenAI Mod (Markov et al., 2023),ToxicChat (Lin et al., 2023), XSTest (Röttger et al., 2023), Overkill (Shi et al., 2024), BeaverTails (Ji et al., 2024)) and (2) our novel safety dataset TwinSafety. (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **SimpleSafetyTests** (measurements) — *measured_by*
  > To assess calibration in the context of binary prompt classification, we evaluate performance using a range of public benchmarks, including OpenAI Moderation (Markov et al., 2023), ToxicChat Test (Lin et al., 2023), Aegis Safety Test (Ghosh et al., 2024), SimpleSafetyTests (Vidgen et al., 2023), XSTest (R¨ottger et al., 2023), Harmbench Prompt (Mazeika et al., 2024) and WildGuardMix Test Prompt (Han et al., 2024).
  - [On Calibration of LLM-based Guard Models for Reliable Content Moderation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a99f732df9b668284b449da0214a3286-Paper-Conference.pdf)
- **HarmBench** (measurements) — *measured_by*
  > We evaluate the safety guard models on four public benchmark datasets: OpenAI Moderation (OAI; Markov et al., 2023), ToxicChat (Lin et al., 2023), HarmBench (Mazeika et al., 2024), and the test split of WildGuardMix.
  - [HarmAug: Effective Data Augmentation for Knowledge Distillation of Safety Guard Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac2d4db1615bf3736f44a1b4889e666b-Paper-Conference.pdf)
- **WildGuardMix** (measurements) — *measured_by*
  > We evaluate the safety guard models on four public benchmark datasets: OpenAI Moderation (OAI; Markov et al., 2023), ToxicChat (Lin et al., 2023), HarmBench (Mazeika et al., 2024), and the test split of WildGuardMix.
  - [HarmAug: Effective Data Augmentation for Knowledge Distillation of Safety Guard Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac2d4db1615bf3736f44a1b4889e666b-Paper-Conference.pdf)
- **HarM** (measurements) — *measured_by*
  > We use three publicly available meme datasets for evaluation: (1) HarM (Pramanick et al., 2021a), (2) FHM (Kiela et al., 2020), and (3) MAMI (Fersini et al., 2022). (Section 4.1)
  - [MIND: A Multi-agent Framework for Zero-shot Harmful Meme Detection](https://aclanthology.org/2025.acl-long.46.pdf)
- **MAMI** (measurements) — *measured_by*
  > We use three publicly available meme datasets for evaluation: (1) HarM (Pramanick et al., 2021a), (2) FHM (Kiela et al., 2020), and (3) MAMI (Fersini et al., 2022). (Section 4.1)
  - [MIND: A Multi-agent Framework for Zero-shot Harmful Meme Detection](https://aclanthology.org/2025.acl-long.46.pdf)
- **ToxiGen** (measurements) — *measured_by*
  > we evaluate general capability using MMLU... and toxicity detection using ToxiGen (Section 3).
  - [When Bad Data Leads to Good Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25d/li25d.pdf)
- **GCG** (measurements) — *measured_by*
  > "For safety filtering, SMAAT accurately identified harmful prompts generated by GCG (Zou et al., 2023), achieving 97-100% accuracy."
  - [Explaining the role of Intrinsic Dimensionality in Adversarial Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altinisik25a/altinisik25a.pdf)
- **Safety awareness** (constructs) — *causes*
  > MLRMs paradoxically enhances safety performance via long reasoning on safety-awareness benchmarks, due to improved capability in identifying unsafe intent (Section 2.2).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)
- **MultiJail** (measurements) — *measured_by*
  > Table 3 compares the accuracy of detecting harmful prompts for text benchmarks. Table 3(A) shows results for multilingual benchmarks, where OMNIGUARD ... achieves new state-of-the-art performance for 3 benchmarks: MultiJail, RTP-LX, and AyaRedTeaming.
  - [MULTIGUARD: An Efficient Approach for AI Safety Moderation Across Languages and Modalities](https://aclanthology.org/2025.emnlp-main.819.pdf)

### → Harmful content detection
- **Cultural knowledge** (constructs) — *causes*
  > introducing more comprehensive knowledge about Chinese culture are both crucial for effectively detecting harmful memes. (Section 5.4)
  - [Towards Comprehensive Detection of Chinese Harmful Memes](https://proceedings.neurips.cc/paper_files/paper/2024/file/17fc467c11997914127c001fdc801bea-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Natural language understanding** (constructs) — *causes*
  > text comprehension plays a more crucial role than image understanding in the detection of harmful memes.
  - [Towards Comprehensive Detection of Chinese Harmful Memes](https://proceedings.neurips.cc/paper_files/paper/2024/file/17fc467c11997914127c001fdc801bea-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Content moderation** (behaviors tasks)
  > We evaluate on 7 content moderation tasks for 8 different cultures to detect the following content: hate speech, offensive language, spam speech, abusive speech, bias speech, threat speech, and stance of speech in zero-shot evaluation (Section 4.1)
  - [CulturePark: Boosting Cross-cultural Understanding in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/77f089cd16dbc36ddd1caeb18446fbdd-Paper-Conference.pdf)
- **COLD** (measurements)
  > Recent datasets such as ToxiCN (Lu et al., 2023), COLD (Deng et al., 2022), Cdial-bias (Zhou et al., 2022), SWSR (Jiang et al., 2022), and SCCD (Yang et al., 2025b) support toxicity classification but do not provide sentiment-preserving rewrites. (Section 1)
  - [Chinese Toxic Language Mitigation via Sentiment Polarity Consistent Rewrites](https://aclanthology.org/2025.emnlp-main.1808.pdf)
- **Safety** (constructs)
  > Considering the potential harm that these memes may cause, this task can be used to evaluate the safety of LLMs. (Section 6)
  - [Towards Comprehensive Detection of Chinese Harmful Memes](https://proceedings.neurips.cc/paper_files/paper/2024/file/17fc467c11997914127c001fdc801bea-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs)
  > The increasing proliferation of harmful content and its evolving nature require effective and generalizable detection methods. (Section 1)
  - [Fine-Grained Transfer Learning for Harmful Content Detection through Label-Specific Soft Prompt Tuning](https://aclanthology.org/2025.naacl-long.551.pdf)
