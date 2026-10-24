# Natural language understanding
**Type:** Construct  
**Referenced in:** 307 papers  
**Also known as:** Language understanding, Natural Language Understanding, Language comprehension, Natural language comprehension, Linguistic understanding, General language understanding, Text comprehension, Input comprehension, Text-level understanding, Text understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define natural language understanding as a model's ability or capacity to comprehend, interpret, and process the meaning, context, intent, or structure of natural language text, often across many tasks. A smaller set operationalizes that same core property through benchmark performance or specific settings such as question answering, instruction following, multimodal prompts, or formal/action mapping, but these are examples or measurements of the same phenomenon rather than different constructs.

**Space of definitions.** Across papers, the prevailing usage treats natural language understanding as a broad model capacity to comprehend and interpret human language, text, or instructions across tasks. Many definitions frame it as a latent or general ability, covering meaning, intent, context, nuance, and semantic content, and some extend it to prompts, task descriptions, natural-language queries, or open-ended commands that must be turned into internal or formal representations. A smaller line of work treats it behaviorally, as performance on task families such as classification, inference, similarity, paraphrase, acceptability judgment, or multilingual question answering. The main difference across definitions is whether the construct is presented as an internal capacity or as observable task performance, and whether it stays broad or is narrowed to settings such as retrieval verification, crossword clues, formal language conversion, or embodied instructions.

**Space of facets.** Papers use several near-synonymous labels for overlapping ideas, including language understanding, language comprehension, linguistic understanding, text understanding, text comprehension, natural language comprehension, input comprehension, general language understanding, and text-level understanding. The most common organization is task-based: classification, natural language inference or textual entailment, similarity or paraphrase, acceptability, and question answering recur as representative facets, while some papers isolate narrower facets such as contextual word meaning, entity tracking as a facet of language comprehension, or instruction-following across linguistic variations. One recurring usage treats natural language inference as a popular way of evaluating natural language understanding, whereas other papers discuss it alongside reasoning, generation, world knowledge, or embodied reasoning rather than using one label for all of them.

**Space of measurement.** Operationalization is dominated by benchmark evaluation. Papers link the construct to 29 measurement instruments and 6 behavioral indicators, with GLUE most often, followed by ARC-Challenge, CoLA, MMLU, and ARC-Easy. These measures are mostly benchmark suites or datasets: GLUE is repeatedly used as a collection of sentence classification, similarity, paraphrase, and inference tasks, while other instruments are described as multiple-choice or task suites assessing various aspects of natural language understanding. The linked behavioral indicators extend the construct into inference, puzzle-like comprehension, chronological ordering, and text-based action settings, so the operationalization mostly matches the broad task-centered definitions, though some measures move into reasoning-heavy, multilingual, or embodied settings.

**Links.** Links beyond measurement are sparse. One paper claims a causal relationship from Memorization to natural language understanding, and other papers claim causal relationships from natural language understanding to Planning and to Text generation. Separate papers report that it is related to Contextual reasoning and to application tasks such as Text-to-SQL and knowledge graph question answering, both described as requiring natural language understanding. No correlational links are reported.

## Sources

**[Fast-ELECTRA for Efficient Pre-training](https://proceedings.iclr.cc/paper_files/paper/2024/file/1e5f58d98523298cba093f658cfdf2d6-Paper-Conference.pdf)**
> The ability of a model to comprehend and interpret human language across a range of tasks.

**[Causal language modeling can elicit search and reasoning capabilities on logic puzzles](https://proceedings.neurips.cc/paper_files/paper/2024/file/67b31ca159553d5593e62d7b998d63ea-Paper-Conference.pdf) (as "Language understanding")**
> The general capability of a model to comprehend and process textual information, which is a prerequisite for interpreting puzzle rules and states.

**[SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf) (as "Natural Language Understanding")**
> The latent capacity to comprehend and interpret natural language text and instructions.

**[DSBench: How Far Are Data Science Agents from Becoming Data Science Experts?](https://proceedings.iclr.cc/paper_files/paper/2025/file/50e9ad960ae78b741a6b4fea533f2eaf-Paper-Conference.pdf) (as "Language comprehension")**
> The fundamental ability to process and interpret the meaning of written or spoken language.

**[EditRoom: LLM-parameterized Graph Diffusion for Composable 3D Room Layout Editing](https://proceedings.iclr.cc/paper_files/paper/2025/file/d807e7678ba3afd3a904f4af52819e77-Paper-Conference.pdf) (as "Natural language comprehension")**
> The ability to interpret open-ended user commands and convert them into actionable internal representations for downstream execution.

**[Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping](https://proceedings.iclr.cc/paper_files/paper/2025/file/36d9468ebdb76b9b229fbd343fff84d5-Paper-Conference.pdf) (as "Linguistic understanding")**
> The model's ability to comprehend and interpret the meaning, intent, and nuances of natural language questions and contexts.

**[Nemotron-CC: Transforming Common Crawl into a Refined Long-Horizon Pretraining Dataset](https://aclanthology.org/2025.acl-long.123.pdf) (as "General language understanding")**
> The latent ability of a language model to comprehend and perform well across a diverse range of natural language tasks involving reasoning, comprehension, and knowledge recall.

**[ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate](https://proceedings.iclr.cc/paper_files/paper/2024/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf) (as "Text understanding")**
> The model's ability to comprehend the meaning, context, and nuances of written language.

**[Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf) (as "Text comprehension")**
> The ability to process textual information, understand its meaning, and extract relevant details to answer questions or perform tasks.

**[From Input Perception to Predictive Insight: Modeling Model Blind Spots Before They Become Errors](https://aclanthology.org/2025.emnlp-main.1740.pdf) (as "Input comprehension")**
> The latent ability of a language model to correctly interpret the meaning of an input sequence, particularly in context-sensitive or non-literal constructions, prior to generating any output.

**[RZ-NAS: Enhancing LLM-guided Neural Architecture Search via Reflective Zero-Cost Strategy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ji25a/ji25a.pdf) (as "Text-level understanding")**
> The latent ability of the LLM to comprehend and reason about neural architecture search tasks through natural language descriptions of search spaces, network construction, and evaluation methods.

## Relationships

### Natural language understanding →
- **GLUE** (measurements) — *measured_by*
  > We compare our approach with LoRA and other parameter-efficient adaptation methods on the natural language understanding (GLUE) and natural language generation (E2E) benchmarks... (Section 1)
  - [VeRA: Vector-based Random Matrix Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1b53ad08de383a049e9668a9d0b6a053-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > To demonstrate the effectiveness of SPA in the natural language understanding domain, we evaluate its performance on several diverse tasks, including Big-Bench Hard (BBH) (Suzgun et al., 2022), GPQA (Rein et al., 2023), MMLU (Hendrycks et al., 2020), and WinoGrande (Sakaguchi et al., 2019).
  - [Synthesize, Partition, then Adapt: Eliciting Diverse Samples from Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6e2861dabad3fe21a71914ccfbfff976-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > A diverse set of benchmarks containing Piqa (Bisk et al., 2019), ARC-c, ARC-e (Clark et al., 2018), Hellaswag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021) and Winogrande (Sakaguchi et al., 2019), which collectively evaluate the language comprehension and reasoning faculties of LLMs. (Section 5.1)
  - [TODO: Enhancing LLM Alignment with Ternary Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/fef5607a9b826f1845533f923e308435-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > A diverse set of benchmarks containing Piqa (Bisk et al., 2019), ARC-c, ARC-e (Clark et al., 2018), Hellaswag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021) and Winogrande (Sakaguchi et al., 2019), which collectively evaluate the language comprehension and reasoning faculties of LLMs. (Section 5.1)
  - [TODO: Enhancing LLM Alignment with Ternary Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/fef5607a9b826f1845533f923e308435-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > To evaluate multitask performance, we test on several NLP benchmarks, including MMLU (Hendrycks et al., 2020), MMLU-Pro (Wang et al., 2024), ARC-Easy, ARC-Challenge (Clark et al., 2018), OpenBookQA (Mihaylov et al., 2018), SWAG (Zellers et al., 2018), and CommonsenseQA (Talmor et al., 2018). These benchmarks consist of multiple-choice questions, assessing various aspects of the model's natural language understanding.
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > These benchmarks consist of multiple-choice questions, assessing various aspects of the model's natural language understanding. For MMLU and MMLU-Pro, we use macro accuracy...
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > To demonstrate the effectiveness of SPA in the natural language understanding domain, we evaluate its performance on several diverse tasks, including Big-Bench Hard (BBH) (Suzgun et al., 2022), GPQA (Rein et al., 2023), MMLU (Hendrycks et al., 2020), and WinoGrande (Sakaguchi et al., 2019).
  - [Synthesize, Partition, then Adapt: Eliciting Diverse Samples from Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6e2861dabad3fe21a71914ccfbfff976-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > A diverse set of benchmarks containing Piqa (Bisk et al., 2019), ARC-c, ARC-e (Clark et al., 2018), Hellaswag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021) and Winogrande (Sakaguchi et al., 2019), which collectively evaluate the language comprehension and reasoning faculties of LLMs. (Section 5.1)
  - [TODO: Enhancing LLM Alignment with Ternary Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/fef5607a9b826f1845533f923e308435-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > BBH tasks cover a diverse range of reasoning problems spanning the following 4 categories according to their authors: 1) Algorithmic and Multi-Step Arithmetic Reasoning, 2) Natural Language Understanding, 3) Use of World Knowledge, and 4) Multilingual Knowledge and Reasoning.
  - [SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > A diverse set of benchmarks containing Piqa (Bisk et al., 2019), ARC-c, ARC-e (Clark et al., 2018), Hellaswag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021) and Winogrande (Sakaguchi et al., 2019), which collectively evaluate the language comprehension and reasoning faculties of LLMs. (Section 5.1)
  - [TODO: Enhancing LLM Alignment with Ternary Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/fef5607a9b826f1845533f923e308435-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > ...language understanding (HellaSwag (Zellers et al., 2019), BoolQ (Clark et al., 2019), OpenbookQA (Mihaylov et al., 2018), SQuAD (Rajpurkar et al., 2016), MMLU (Hendrycks et al., 2021), MMLU-Pro (Wang et al., 2024), GPQA(Rein et al., 2023)) (Section 3).
  - [Samba: Simple Hybrid State Space Models for Efficient Unlimited Context Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf)
- **CoLA** (measurements) — *measured_by*
  > In the realm of NLU, we utilized the CoLA (Warstadt et al., 2019), RTE (Poliak, 2020), MNLI (Williams et al., 2018), MRPC (Dolan & Brockett, 2005) datasets from GLUE benchmark (Wang et al., 2018) to evaluate the performance of UniCoTT (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **SuperGLUE** (measurements) — *measured_by*
  > We assess the effectiveness of MPDistil using two natural language understanding benchmarks, SuperGLUE (Wang et al., 2019) and GLUE (Wang et al., 2018), encompassing 15 NLU tasks. (Section 1)
  - [A Good Learner can Teach Better: Teacher-Student Collaborative Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a781ff9cfb267277937db1818284739f-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > exceeding the performance of AR models in text quality and on the LAMBADA natural language understanding benchmark.
  - [Beyond Autoregression: Fast LLMs via Self-Distillation Through Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/0f93c3e9b557980d93016671acd94bd2-Paper-Conference.pdf)
- **RTE** (measurements) — *measured_by*
  > In the realm of NLU, we utilized the CoLA (Warstadt et al., 2019), RTE (Poliak, 2020), MNLI (Williams et al., 2018), MRPC (Dolan & Brockett, 2005) datasets from GLUE benchmark (Wang et al., 2018) to evaluate the performance of UniCoTT (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > The results show no significant losses of general ability like natural language understanding after aligning with the embodied environment... Table 2: Zero-shot performance on Language Model Evaluation Harness [56]
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > To demonstrate the effectiveness of SPA in the natural language understanding domain, we evaluate its performance on several diverse tasks, including Big-Bench Hard (BBH) (Suzgun et al., 2022), GPQA (Rein et al., 2023), MMLU (Hendrycks et al., 2020), and WinoGrande (Sakaguchi et al., 2019).
  - [Synthesize, Partition, then Adapt: Eliciting Diverse Samples from Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6e2861dabad3fe21a71914ccfbfff976-Paper-Conference.pdf)
- **HumanEval** (measurements) — *measured_by*
  > HumanEval [6] is a dataset for evaluating code generation ability, containing 164 manually crafted programming problems covering aspects such as language understanding, reasoning, algorithms, and simple mathematics.
  - [Parameter Competition Balancing for Model Merging](https://proceedings.neurips.cc/paper_files/paper/2024/file/99fc8bc48b917c301a80cb74d91c0c06-Paper-Conference.pdf)
- **Lambada-OpenAI** (measurements) — *measured_by*
  > Language Understanding (LU): Lambada-OpenAI [44], Hellaswag-0-shot [65], Winograd-3-shots [30], and WinoGrande-5-shots [54].
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **MNLI** (measurements) — *measured_by*
  > In the realm of NLU, we utilized the CoLA (Warstadt et al., 2019), RTE (Poliak, 2020), MNLI (Williams et al., 2018), MRPC (Dolan & Brockett, 2005) datasets from GLUE benchmark (Wang et al., 2018) to evaluate the performance of UniCoTT (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **MRPC** (measurements) — *measured_by*
  > In the realm of NLU, we utilized the CoLA (Warstadt et al., 2019), RTE (Poliak, 2020), MNLI (Williams et al., 2018), MRPC (Dolan & Brockett, 2005) datasets from GLUE benchmark (Wang et al., 2018) to evaluate the performance of UniCoTT (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **QNLI** (measurements) — *measured_by*
  > The experiments involved 4 NLU benchmarks: RTE (Wang et al., 2019), COLA (Wang et al., 2019), 20NG (Lang, 1995) and QNLI (Wang et al., 2019) (Section 4).
  - [Federated Residual Low-Rank Adaption of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/906c860f1b7515a8ffec02dcdac74048-Paper-Conference.pdf)
- **GLUE-X** (measurements) — *measured_by*
  > We conduct experiments on both zero-shot and few-shot settings of natural language understanding and question answering (QA). SuperContext is validated on a comprehensive OOD benchmarks GLUE-X (Yang et al., 2022), and a QA dataset, SQuAD 2.0 (Rajpurkar et al., 2018). (Section 2)
  - [Supervised Knowledge Makes Large Language Models Better In-context Learners](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfa629625fd35bf5b880df464b584a57-Paper-Conference.pdf)
- **SWAG** (measurements) — *measured_by*
  > To evaluate multitask performance, we test on several NLP benchmarks, including MMLU (Hendrycks et al., 2020), MMLU-Pro (Wang et al., 2024), ARC-Easy, ARC-Challenge (Clark et al., 2018), OpenBookQA (Mihaylov et al., 2018), SWAG (Zellers et al., 2018), and CommonsenseQA (Talmor et al., 2018). These benchmarks consist of multiple-choice questions, assessing various aspects of the model's natural language understanding.
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > To evaluate multitask performance, we test on several NLP benchmarks, including MMLU (Hendrycks et al., 2020), MMLU-Pro (Wang et al., 2024), ARC-Easy, ARC-Challenge (Clark et al., 2018), OpenBookQA (Mihaylov et al., 2018), SWAG (Zellers et al., 2018), and CommonsenseQA (Talmor et al., 2018). These benchmarks consist of multiple-choice questions, assessing various aspects of the model's natural language understanding.
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
- **LiveBench** (measurements) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **20 Newsgroups** (measurements) — *measured_by*
  > The experiments involved 4 NLU benchmarks: RTE (Wang et al., 2019), COLA (Wang et al., 2019), 20NG (Lang, 1995) and QNLI (Wang et al., 2019) (Section 4).
  - [Federated Residual Low-Rank Adaption of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/906c860f1b7515a8ffec02dcdac74048-Paper-Conference.pdf)
- **MLQA** (measurements) — *measured_by*
  > We evaluate our methods on unlearning math-solving, Python-coding, and comprehension skills across seven different languages with GSM8K, MBPP, and MLQA datasets respectively. (Section 6)
  - [Effective Skill Unlearning through Intervention and Abstention](https://aclanthology.org/2025.naacl-long.322.pdf)
- **ALFWorld** (measurements) — *measured_by*
  > ALFWorld (Shridhar et al., 2020) provides a text-based household task environment that for natural language understanding and embodied reasoning. (Section 5.1)
  - [SAND: Boosting LLM Agents with Self-Taught Action Deliberation](https://aclanthology.org/2025.emnlp-main.152.pdf)
- **Direct prompting** (measurements) — *measured_by*
  > We study a range of LMs on both language comprehension and language production using direct and Chain-of-Thought (CoT) prompting... (Abstract)
  - [On the Same Wavelength? Evaluating Pragmatic Reasoning in Language Models across Broad Concepts](https://aclanthology.org/2025.emnlp-main.1008.pdf)
- **Paraphrastic robustness** (constructs) — *causes*
  > Althought this is expected for paraphrastic robustnes as LLMs are known for their language understanding capabilities, it is somewhat surprising to see that the LLM helps even for novel behaviors...
  - [Large Language Models as Generalizable Policies for Embodied Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/8f9461d11e8ce9b0b28b21bfc645d74e-Paper-Conference.pdf)
- **TACT** (measurements) — *measured_by*
  > The resulting TACT instances consist of the original text, the written instruction, and a gold answer, all requiring advanced text comprehension and reasoning (illustrated in Figure 1). (Section 1)
  - [TACT: Advancing Complex Aggregative Reasoning with Information Extraction Tools](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d7025dc9bd4c8b6fb1eef80cc618008-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Harmful content detection** (behaviors tasks) — *causes*
  > text comprehension plays a more crucial role than image understanding in the detection of harmful memes.
  - [Towards Comprehensive Detection of Chinese Harmful Memes](https://proceedings.neurips.cc/paper_files/paper/2024/file/17fc467c11997914127c001fdc801bea-Paper-Datasets_and_Benchmarks_Track.pdf)
- **RACE** (measurements) — *measured_by*
  > Different datasets including... language understanding and knowledge such as... Race-Middle, Race-High [60]... are comprehensively evaluated. (Section 4)
  - [Wings: Learning Multimodal LLMs without Text-only Forgetting](https://proceedings.neurips.cc/paper_files/paper/2024/file/3852f6d247ba7deb46e4e4be9e702601-Paper-Conference.pdf)
- **Belebele** (measurements) — *measured_by*
  > After numerous SFT runs on these “generic” multi-task datasets, the three checkpoints for each language are primarily selected based off their performance on the target language splits on BELEBELE (Bandarkar et al., 2024) and FLORES (NLLB et al., 2022). These simple tasks, reading comprehension and translation, are strong indicators of basic language understanding and generation capabilities. (Section 3.1)
  - [Layer Swapping for Zero-Shot Cross-Lingual Transfer in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f9a44cb707ede42a659ad85d940dd55-Paper-Conference.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > ...language understanding (HellaSwag (Zellers et al., 2019), BoolQ (Clark et al., 2019), OpenbookQA (Mihaylov et al., 2018), SQuAD (Rajpurkar et al., 2016), MMLU (Hendrycks et al., 2021), MMLU-Pro (Wang et al., 2024), GPQA(Rein et al., 2023)) (Section 3).
  - [Samba: Simple Hybrid State Space Models for Efficient Unlimited Context Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > Additionally, we employ comprehensive benchmarks for different tasks, including MTBench (Zheng et al., 2023) to compare their language understanding and reasoning capabilities across different quantizations. (Section 3.1)
  - [PALMBENCH: A COMPREHENSIVE BENCHMARK OF COMPRESSED LARGE LANGUAGE MODELS ON MOBILE PLATFORMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/a647405740b28a61311ac9cff28772e5-Paper-Conference.pdf)
- **Jailbreak prompt generation** (behaviors tasks) — *causes*
  > we can fine-tune an existing language model, turning it into a robust jailbreak prompt generator by leveraging LLMs’ advanced language understanding and generation abilities. (INTRODUCITON)
  - [One Model Transfer to All: On Robust Jailbreak Prompts Generation against LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124cc3a6e8f563555c8bba9f5ded690f-Paper-Conference.pdf)
- **TweetEval** (measurements) — *measured_by*
  > We conduct experiments on two multi-task benchmarks, TweetEval and AffectEval for language understanding. (Section 1)
  - [Impartial Multi-task Representation Learning via Variance-invariant Probabilistic Decoding](https://aclanthology.org/2025.acl-long.975.pdf)

### → Natural language understanding
- **Question-answer pair generation** (behaviors tasks) — *causes*
  > Moreover, both objectives [rationale and QA] enhance the model’s language understanding, which we found to be important especially for the query split. (Section 4.3).
  - [Web-Scale Visual Entity Recognition: An LLM-Driven Data Approach](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d158f054ff0cb83397367234899db07-Paper-Conference.pdf)

### Associated with
- **Text-to-SQL** (behaviors tasks)
  > Text-to-SQL generation provides an ideal middle ground, as SQL’s formal structure makes it more tractable than general language generation while still requiring natural language understanding. (Section 1)
  - [TinySQL: A Progressive Text-to-SQL Dataset for Mechanistic Interpretability Research](https://aclanthology.org/2025.emnlp-main.1489.pdf)
- **Knowledge graph question answering** (behaviors tasks)
  > KGQA poses challenges to existing approaches, as it requires a deep understanding of natural language questions and the ability to perform complex reasoning over KGs. (Section 1)
  - [D-RAG: Differentiable Retrieval-Augmented Generation for Knowledge Graph Question Answering](https://aclanthology.org/2025.emnlp-main.1793.pdf)
- **Text generation** (behaviors tasks)
  > For actions that require natural language understanding, such as composing a text message or querying a search engine, a VLM is invoked to generate the necessary text.
  - [Lightweight Neural App Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/b81266057eb3d96469940d1860a41ad2-Paper-Conference.pdf)
- **Word puzzle solving** (behaviors tasks)
  > “Language Comprehension: Connections word puzzles, a typo-fixing task, and a movie synopsis unscrambling task”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Chronological ordering** (behaviors tasks)
  > “Language Comprehension: Connections word puzzles, a typo-fixing task, and a movie synopsis unscrambling task”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > recent studies indicate that the language understanding offered by these models remains limited and far from human-like performance, particularly in grasping the contextual meanings of words—an essential aspect of reasoning. (Abstract)
  - [SANDWiCH: Semantical Analysis of Neighbours for Disambiguating Words in Context ad Hoc](https://aclanthology.org/2025.naacl-long.358.pdf)
- **Table reasoning** (constructs)
  > Tabular reasoning involves interpreting natural language queries about tabular data, which presents a unique challenge of combining language understanding with structured data analysis.
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **Textual reasoning** (behaviors tasks)
  > Textual reasoning excels in natural language understanding
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **Natural language inference** (behaviors tasks)
  > In the recent past, a popular way of evaluating natural language understanding (NLU), was to consider a model’s ability to perform natural language inference (NLI) tasks. (Abstract)
  - [Lost in Inference: Rediscovering the Role of Natural Language Inference for Large Language Models](https://aclanthology.org/2025.naacl-long.466.pdf)
- **Ranking** (behaviors tasks)
  > Passage reranking aims to assign fine-grained relevance scores to candidate passages – typically retrieved by a first-stage retriever (Robertson et al., 1994; Karpukhin et al., 2020) – by harnessing the language understanding capabilities of large language models (LLMs) (Section 1).
  - [Multi-view-guided Passage Reranking with Large Language Models](https://aclanthology.org/2025.emnlp-main.1459.pdf)
