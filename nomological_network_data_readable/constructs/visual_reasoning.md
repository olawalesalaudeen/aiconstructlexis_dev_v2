# Visual reasoning
**Type:** Construct  
**Referenced in:** 66 papers  
**Also known as:** Visual-Linguistic Reasoning, Visual thinking, Limited cognitive ability  

## State of the Field

**Definition agreement:** Consensus. Most papers define visual reasoning as a model's ability to interpret visual input, often jointly with text, and draw inferences or solve complex or multi-step tasks, with the differences mainly being the example domains such as videos, panels, charts, diagrams, or spatial patterns. A few papers instead emphasize internal visual representations or a limitation in that capacity, but these are isolated compared with the dominant shared definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats visual reasoning as a model ability to understand visual information and draw inferences from it, often by combining perceptual cues with multi-step, symbolic, compositional, or otherwise complex reasoning. Many papers keep this broad while specializing the setting, for example videos with fine-grained spatiotemporal interactions, charts, tables and diagrams, geometric and spatial patterns, or multimodal problems that combine vision with text and can require ambiguity resolution. Most definitions describe an ability or capacity, though one paper uses it as a task of performing reasoning steps based on visual information to answer a complex question. A smaller line of work uses nearby labels or other framings, including visual-linguistic reasoning over joint visual and textual inputs, visual thinking with image-based internal representations or generated visualizations, and limited cognitive ability, where a model gives hallucinated responses despite accurate perception.

**Space of facets.** Papers commonly break visual reasoning into subtypes rather than treating it as a single undifferentiated skill. One recurrent breakdown places spatial, temporal, predictive, causal, and counterfactual reasoning under visual reasoning, while other papers emphasize multi-hop inference, interpretation of charts and graphs, geometric understanding, and conceptualization or conceptual abstraction without algorithmic computation. Another recurring organization separates low-level visual extraction from later reasoning, as in the look, remember, reason process. Related names are used unevenly: visual-linguistic reasoning stresses joint vision-text processing, and visual thinking stresses reasoning in a visual space through generated visualizations.

**Space of measurement.** Operationalization is benchmark-heavy: visual reasoning is linked to 18 measurement instruments and 3 behavioral indicators, most often MMMU, GQA, MME, MathVista, and ACRE. Papers describe these instruments as benchmark suites for evaluating visual reasoning, as tests of general visual reasoning, and as datasets of visual reasoning tasks, spanning general multimodal question answering, video settings, and problems involving charts, diagrams, or structured visual content. These operationalizations mostly match the broad inference-from-visual-information definitions, although some linked measures are described as visual perception tasks or as benchmarks that reveal visual shortcomings while still being used to measure visual reasoning.

**Links.** Papers link visual reasoning to 7 constructs and 3 behavioral indicators beyond measurement. They claim causal relationships from Grounding and Visual editing to visual reasoning. In the other direction, one paper claims a causal relationship from visual reasoning to Hallucination, in a discussion where overlooked intermediate visual reasoning is said to lead to hallucinations, and another claims a causal relationship from visual reasoning to Calibration, stating that models "thinking with images" show better calibration. Papers also report that visual reasoning is related to several reasoning subtypes and to Safety alignment, with one paper describing a trade-off in which higher visual reasoning capability accompanies lower safety alignment.

## Sources

**[GENOME: Generative Neuro-Symbolic Visual Reasoning by Growing and Reusing Modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/088d99765bc121c6df215da7d45bc4e9-Paper-Conference.pdf)**
> The capacity to draw inferences from visual inputs by combining perceptual cues with multi-step symbolic or compositional reasoning.

**[Matryoshka Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/722fcbc1a6667f2075d75ea79a1b3552-Paper-Conference.pdf) (as "Visual-Linguistic Reasoning")**
> The latent ability to process and reason about combined visual and textual information to derive answers or descriptions.

**[Imagine While Reasoning in Space: Multimodal Visualization-of-Thought](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cz/li25cz.pdf) (as "Visual thinking")**
> The capacity to reason using image-based internal representations or visualizations in addition to text.

**[Is Cognition Consistent with Perception? Assessing and Mitigating Multimodal Knowledge Conflicts in Document Understanding](https://aclanthology.org/2025.emnlp-main.1574.pdf) (as "Limited cognitive ability")**
> A constraint in the model’s capacity to correctly comprehend or reason about visual content, leading to hallucinated or incorrect cognitive responses despite accurate perception.

## Relationships

### Visual reasoning →
- **MMMU** (measurements) — *measured_by*
  > Additionally, the challenging MMMU [68] is evaluated to assess the visual reasoning abilities of the multimodal LLMs. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **MathVista** (measurements) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **ACRE** (measurements) — *measured_by*
  > We demonstrate the effectiveness of our framework on diverse visual reasoning tasks from the ACRE, CATER, Something-Else and STAR datasets (Abstract).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **STAR** (measurements) — *measured_by*
  > We demonstrate the effectiveness of our framework on diverse visual reasoning tasks from the ACRE, CATER, Something-Else and STAR datasets (Abstract).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **VQA-v2** (measurements) — *measured_by*
  > VQAv2 Goyal et al. (2017) and VizWiz Gurari et al. (2018) test general visual reasoning
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **VizWiz** (measurements) — *measured_by*
  > VQAv2 Goyal et al. (2017) and VizWiz Gurari et al. (2018) test general visual reasoning
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **AI2D** (measurements) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **ChartQA** (measurements) — *measured_by*
  > To estimate the downstream error Y (N, C), we test our trained VLMs on a suite of nine commonly used benchmarks for evaluating visual reasoning: MME (Fu et al., 2024), GQA (Hudson & Manning, 2019), AI2D (Kembhavi et al., 2016), MMBench (Liu et al., 2024c), MMMU (Yue et al., 2023), ScienceQA (Lu et al., 2022), MathVista (Lu et al., 2024), POPE (Li et al., 2023c), and ChartQA (Masry et al., 2022). (Section 3.2)
  - [Inference Optimal VLMs Need Fewer Visual Tokens and More Parameters](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef748b4544e8f12d608fd28bbf04177f-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > existing tuning methods train models to provide conclusive responses to instructions based on visual inputs, causing them to overlook essential intermediate visual reasoning. This often leads to ... even generating hallucinations. (Section 1)
  - [CogCoM: A Visual Language Model with Chain-of-Manipulations Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1dcee1cd6890ab7fcdf173ec10526da9-Paper-Conference.pdf)
- **NLVR2** (measurements) — *measured_by*
  > The experiments were conducted on four image-text tasks: VQAv2 (Goyal et al., 2017b), GQA (Hudson & Manning, 2019) for vision question-answering, NLVR2 (Suhr et al., 2019) for visual reasoning, MSCOCO (Chen et al., 2015) for image captioning
  - [RepLoRA: Reparameterizing Low-rank Adaptation via the Perspective of Mixture of Experts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/truong25a/truong25a.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > ...we evaluate the proposed Image-DPO algorithm across three VLM models... using several popular VLM benchmarks that focus on different aspects, including... general visual reasoning (MM-Vet (Yu et al., 2023c))... (Section 5.1)
  - [Probing Visual Language Priors in VLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25b/luo25b.pdf)

### → Visual reasoning
- **Grounding** (constructs) — *causes*
  > many visual reasoning problems in videos require grounding in fine-grained low-level information (Section 1).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **Visual editing** (behaviors tasks) — *causes*
  > REFOCUS conducts visual editing on input images as a chain-of-thought, providing an intermediate interface for multimodal LLMs to facilitate visual reasoning and enforce the correct answer with a valid reasoning process. (Section 3. REFOCUS)
  - [ReFocus: Visual Editing as a Chain of Thought for Structured Image Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fu25d/fu25d.pdf)
- **Calibration** (constructs) — *correlates*
  > "visual reasoning models (i.e., thinking with images) consistently exhibit better calibration"
  - [Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf)

### Associated with
- **Spatial reasoning** (constructs)
  > Our task suite encompasses a comprehensive set of perceptual and cognitive tasks, including summarization, perception (recall, tracking), visual reasoning (spatial, temporal, predictive, causal, counterfactual), and navigation (room-to-room, object retrieval) tasks. (Section 2.1)
  - [HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Temporal reasoning** (constructs)
  > Our task suite encompasses a comprehensive set of perceptual and cognitive tasks, including summarization, perception (recall, tracking), visual reasoning (spatial, temporal, predictive, causal, counterfactual), and navigation (room-to-room, object retrieval) tasks. (Section 2.1)
  - [HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Causal reasoning** (constructs)
  > Our task suite encompasses a comprehensive set of perceptual and cognitive tasks, including summarization, perception (recall, tracking), visual reasoning (spatial, temporal, predictive, causal, counterfactual), and navigation (room-to-room, object retrieval) tasks. (Section 2.1)
  - [HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Counterfactual reasoning** (constructs)
  > Our task suite encompasses a comprehensive set of perceptual and cognitive tasks, including summarization, perception (recall, tracking), visual reasoning (spatial, temporal, predictive, causal, counterfactual), and navigation (room-to-room, object retrieval) tasks. (Section 2.1)
  - [HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Safety alignment** (constructs)
  > This observation highlights a fundamental trade-off: as visual reasoning capabilities increase, safety alignment tends to degrade. (Section 1)
  - [VisCRA: A Visual Chain Reasoning Attack for Jailbreaking Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.312.pdf)
- **Visual grounding** (constructs)
  > it’s essential for the LLM to possess high-level, in-depth vision reasoning capabilities, building upon the foundational low-level pixel grounding.
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
