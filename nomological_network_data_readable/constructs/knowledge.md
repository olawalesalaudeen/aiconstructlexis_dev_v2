# Knowledge
**Type:** Construct  
**Referenced in:** 29 papers  
**Also known as:** Knowledge ability, Knowledge capacity  

## State of the Field

**Definition agreement:** Complementary. Most papers define knowledge as a model's stored or encoded factual or world information and its ability to retrieve or recall that information. A few papers broaden this to include correctly applying conceptual, procedural, or expert knowledge to solve tasks, which is a compatible extension of the same latent model property rather than a different phenomenon.

**Space of definitions.** Across the surveyed papers, the prevailing usage treats knowledge as a model-level latent ability or capacity to have acquired, encoded, stored, and recall or retrieve factual information about the world, sometimes with the added condition that the answer is not directly available in the input. A smaller line of work broadens this from recall to correct application or utilization, defining it in terms of applying factual, semantic, procedural, or conceptual information, or of retrieving and using acquired knowledge to solve professional problems. One further framing emphasizes breadth of expert information across subject areas and benchmark items rather than recall alone.

**Space of facets.** Several recurrent contrasts appear across papers. One paper explicitly divides evaluation into knowledge ability versus inference ability, another says multiple-choice questions mainly assess basic knowledge levels such as recalling, understanding, and applying knowledge, and another treats reasoning and knowledge as part of a broader general ability. The labels knowledge, knowledge ability, and knowledge capacity are used for closely related model properties, although one paper uses the capacity wording specifically for retrieving and utilizing acquired knowledge to solve professional problems.

**Space of measurement.** Operationally, papers link knowledge to 11 measurement instruments and 2 behavioral indicators. Measurement is mostly benchmark-based: MMLU is the most frequently linked instrument, with TriviaQA, A-OKVQA, and ARC-Challenge also recurring, and papers operationalize the construct through question answering where answers are not in the input, zero-shot subject benchmarks, and broad domain tests of world knowledge. This largely matches definitions centered on stored factual knowledge, though some operationalizations broaden the target to knowledge and reasoning, one paper says multiple-choice QA does not fully test knowledge, and one behavioral indicator, synthetic data detection, is also treated as testing knowledge alongside perception and reasoning.

**Links.** Beyond measurement, the recorded links are relational rather than causal or correlational. One paper relates knowledge to natural language inference, saying such tasks require integrating knowledge and reasoning, and another relates general ability to knowledge by arguing that a single common factor underlying benchmark scores reflects a general ability for reasoning and knowledge.

## Sources

**[VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The latent ability to recall facts or information contained in the model that cannot be found directly in the input.

**[LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Knowledge ability")**
> The extent to which a large language model has acquired and can recall factual information about the world.

**[PertEval: Unveiling Real Knowledge Capacity of LLMs with Knowledge-Invariant Perturbations](https://proceedings.neurips.cc/paper_files/paper/2024/file/149578235c90954e4f10e40fa181918f-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Knowledge capacity")**
> The ability of a model to retrieve and utilize acquired knowledge to solve professional problems.

## Relationships

### Knowledge →
- **MMLU** (measurements) — *measured_by*
  > “the mostly knowledge-driven MMLU benchmark”
  - [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad236edc564f3e3156e1b2feafb99a24-Paper-Datasets_and_Benchmarks_Track.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > The input for the task is knowledge-intensive questions from TriviaQA (Joshi et al., 2017). (p. 5)
  - [Benchmarking and Improving Generator-Validator Consistency of Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfcb583d225b1db8d3ca2331f6785774-Paper-Conference.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > To rigorously assess and push the capabilities of these LLMs, we introduce MMLU-Pro, a new benchmark designed to test the upper limits of reasoning and knowledge in advanced language models. (Section 2.1).
  - [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad236edc564f3e3156e1b2feafb99a24-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ArabicMMLU** (measurements) — *measured_by*
  > Knowledge assessment: We choose ArabicMMLU [21], and EXAMS [22], which provide a comprehensive evaluation of knowledge across various subjects. (Section 3.1)
  - [Alignment at Pre-training! Towards Native Alignment for Arabic LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/195c4e2910bedabd813f9fe4e70c642c-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > For track 1, we adopt commonly used MMLU [16], Arc-eacy [3], and Arc-challenge [3] to evaluate the knowledge ability of LLMs.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > Table 5: Multimodal reasoning ability on MM-Vet [92]. Rec denotes Recognition; Know denotes knowledge; Gen denotes Language generation; and Spat denotes Spatial awareness.
  - [LOVA3: Learning to Visual Question Answering, Asking and Assessment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0822540916cd716add52e1846a6e18d-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > “Knowledge Capability (KC), which leverages Qwen1.5-32B (Bai et al., 2023a) to evaluate the correctness of knowledge presented in answers.”
  - [SEFE: Superficial and Essential Forgetting Eliminator for Multimodal Continual Instruction Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25n/chen25n.pdf)

### Associated with
- **Natural language inference** (behaviors tasks)
  > notably NLI tasks, which require integrating knowledge and reasoning. (Section 1)
  - [Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf)
- **General ability** (constructs)
  > Finally, the identification of a single common factor underlying all benchmark scores suggests that a general ability for reasoning and knowledge can be effectively measured through a consolidated, sparse benchmark. (Section 4)
  - [metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf)
- **Synthetic data detection** (behaviors tasks)
  > the task of distinguishing between real and synthetic data effectively tests the perception, knowledge, and reasoning capabilities of LMMs. (ABSTRACT)
  - [LOKI: A Comprehensive Synthetic Data Detection Benchmark using Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/afd6374c7f2839cba22f537f15f4f760-Paper-Conference.pdf)
