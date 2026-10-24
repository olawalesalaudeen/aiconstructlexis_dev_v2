# LAMBADA
**Type:** Measurement  
**Referenced in:** 103 papers  
**Also known as:** Lambada, LAMBADA-standard  

## State of the Field

**What it is.** Across papers, LAMBADA is most commonly described as a language modeling, word prediction, or next-word benchmark in which a model predicts the final word of a passage, paragraph, or sentence from broad discourse or long-range context. A recurring formulation is that it tests long-range dependencies, long-term context recall, or contextual understanding, and several papers evaluate it in zero-shot settings. A smaller line of work describes it as a reading comprehension benchmark, and papers also refer to variants such as LAMBADA-standard (LS), LAMBADA (OpenAI), the OpenAI variant, and LAMBADA_OPENAI.

**What it is claimed to measure.** Papers use LAMBADA to measure a broad range of targets rather than a single recurring construct: it is linked to 11 constructs and 8 behavioral indicators. The most frequently linked constructs are Commonsense reasoning, Contextual understanding, General ability, Natural language understanding, and Reasoning, with 6 other constructs also linked: Zero-shot generalization, In-context learning, Language modeling ability, Logical reasoning, Long-context understanding, and World knowledge. Among behavioral indicators, the most frequent links are Downstream task performance, Language understanding task performance, Machine reading comprehension, Question answering, and Sentence completion, plus 3 others: Text generation, Zero-shot question answering, and Zero-shot task performance.

**Space of uses.** In use, papers commonly place LAMBADA inside larger zero-shot or downstream benchmark suites, often alongside HellaSwag, PIQA, ARC, WinoGrande, and MMLU. Reported metrics include accuracy, perplexity, or both, and papers also use it as a validation task for language model pre-training. One other instrument is linked to it, lm-evaluation-harness: papers report that LAMBADA is related to that harness, and another paper reports that LAMBADA is measured by lm-evaluation-harness, with the evaluation conducted using the LM-Evaluation-Harness repository.

## Sources

**[A Multi-Level Framework for Accelerating Training Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/33f2c200b71ce947d356d171022458ec-Paper-Conference.pdf)**
> A language modeling task that evaluates the ability to predict the last word in a sentence requiring broad discourse context, used here to test length prediction reliability.

**[Language Model Cascades: Token-Level Uncertainty And Beyond](https://proceedings.iclr.cc/paper_files/paper/2024/file/11f5520daf9132775e8604e89f53925a-Paper-Conference.pdf) (as "Lambada")**
> A reading comprehension benchmark included in the expanded evaluation set.

**[MxMoE: Mixed-precision Quantization for MoE with Accuracy and Performance Co-Design](https://raw.githubusercontent.com/mlresearch/v267/main/assets/duanmu25a/duanmu25a.pdf) (as "LAMBADA-standard")**
> The standard version of the LAMBADA dataset for evaluating a model's ability to predict the final word of a text passage.

## Relationships

### → LAMBADA
- **Language modeling** (behaviors tasks) — *measured_by*
  > We investigate the drafts produced by this 1.5B blockwise parallel LM on LAMBADA [33] (language modeling)... (Section 4)
  - [Accelerating Blockwise Parallel Language Models with Draft Refinement](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c9629e718d931e8d4d240378aa1d3bf-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > exceeding the performance of AR models in text quality and on the LAMBADA natural language understanding benchmark.
  - [Beyond Autoregression: Fast LLMs via Self-Distillation Through Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/0f93c3e9b557980d93016671acd94bd2-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > We chose the LAMBADA dataset (Paperno et al., 2016) for evaluation, as it tests a model’s ability to predict the final word of a passage, directly assessing language modeling capability without relying on specific knowledge, making it suitable for comparing models with small-scale training. (Section 6.3.2)
  - [TAID: Temporally Adaptive Interpolated Distillation for Efficient Knowledge Transfer in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e664650506f1cf2b4696df892147c06e-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > These benchmarks assess different aspects of LLM emergent abilities: Lambada evaluates contextual comprehension, testing the model’s ability to understand long-range dependencies in text. (Section 4.2)
  - [Neuron-based Multifractal Analysis of Neuron Interaction Dynamics in Large Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6158e152498f8d8b83d14388a7ec1963-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate Spectra Suite models using eight distinct common-sense and reasoning benchmarks consisting of tasks from logical and reasoning questions to grounded and physical commonsense tasks: Arc Easy, Arc Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), HellaSWAG (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2021), PIQA (Bisk et al., 2019), LAMBADA (Paperno et al., 2016), LogiQA (Liu et al., 2021), all under zero-shot settings. (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > We also evaluate the ability of BD3-LMs to generalize to unseen datasets in a zero-shot setting... We evaluate the likelihood of models trained with OWT on datasets... Lambada... (Section 6.1)
  - [Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > Figure 3: Models trained with 4k context length. Final performance (y-axis) on a set of downstream tasks... lambada
  - [nGPT: Normalized Transformer with Representation Learning on the Hypersphere](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c12689a89e98a61bcaa65285a41b7c-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > We measure the zero-evaluation performance of trained GPT models on LAMBADA and WikiText using perplexity scores. (Section 5.2)
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)
- **General ability** (constructs) — *measured_by*
  > "We evaluate the pre-trained base models on 17 tasks across different general domains which include: MMLU (Hendrycks et al., 2020), Arc-Easy, Arc-Challenge (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), SIQA (Sap et al., 2019), SciQ (Welbl et al., 2017), RTE (Dagan et al., 2005), BBH (Suzgun et al., 2022), LAMBADA"
  - [Predictive Data Selection: The Data That Predicts Is the Data That Teaches](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shum25a/shum25a.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > We evaluate our models on the LAMBADA dataset and report accuracy and perplexity for zero-shot generation in Figure 4.
  - [Headless Language Models: Learning without Predicting with Contrastive Weight Tying](https://proceedings.iclr.cc/paper_files/paper/2024/file/92864e1191ed272deb0914b3bb50f97c-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > “a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29].”
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **Autoregressive language modeling** (behaviors tasks) — *measured_by*
  > Table 2: LLM English evaluation. (Table 2)
  - [Theory, Analysis, and Best Practices for Sigmoid Self-Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/a43b459e9fab3a703148ba0c83b8a442-Paper-Conference.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
