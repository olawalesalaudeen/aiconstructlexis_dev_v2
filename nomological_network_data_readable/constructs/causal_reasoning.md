# Causal reasoning
**Type:** Construct  
**Referenced in:** 46 papers  
**Also known as:** Causal inference, Cause-and-effect reasoning, Causation understanding, Attribution understanding, Causal consistency, Causal understanding, Causal relationship modeling, Commonsense causal reasoning, Commonsense and causal reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define causal reasoning as the ability to identify, understand, or infer cause and effect relationships between events or variables, with differences mainly in modality or setting such as video, text, narratives, or driving scenarios. A smaller group elaborates the same core ability with counterfactuals, interventions, distinguishing causation from correlation, or representing causal structure, which reads as added detail rather than a different phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats causal reasoning as a latent ability to identify, infer, or understand cause-and-effect relations between events or variables from a context, often in text, video, or narratives, and sometimes explicitly as identifying reasons and consequences. Some authors broaden it to distinguishing causation from correlation and reasoning under interventions, counterfactuals, or confounding, and a smaller line frames it as grasping an environment's underlying causal structure or representing true dependencies. A few papers use neighboring labels for setting-specific or output-specific variants, including everyday commonsense causal reasoning, video attribution or anomaly causation, and one paper's causal consistency, the coherence between factual and counterfactual answers in the same context.

**Space of facets.** When papers subdivide the construct, they most often organize it into discovery or inference, counterfactual, and commonsense forms; one formulation also adds attribution and causal effect estimation tasks. One paper describes two stages, discerning the relation in context and then answering causality-related queries in line with the context and objective causal laws. Across papers, nearby names are often used for much the same ability, while causal consistency marks a different use of the term: coherence between factual and counterfactual answers rather than the ability itself.

**Space of measurement.** Papers link it to 6 measurement instruments and 7 behavioral indicators. Operationalization is almost entirely benchmark-based: the most common linked instruments are COPA, ACRE, COPAL-ID, CREPE, and NExT-QA, with one other linked instrument, and papers describe these as testing commonsense causal choice, visual causal induction or "blicket" detection, non-English causal reasoning, or causal reasoning in video question answering. Some papers also say long-video or broader video question answering measures causal and temporal reasoning over long windows; no linked human evaluation, LLM-as-a-judge, or probe-style instrument appears. These measures mostly match the dominant definition by asking models to identify plausible causes, effects, or causal relations in context, but they are narrower than definitions that additionally emphasize interventions, counterfactuals, confounding, or explicit causal structure.

**Links.** Several papers relate it to other causal tasks, especially causal discovery or inference and counterfactual reasoning. Separate papers claim a causal relationship from causal reasoning to planning and robustness, and one paper claims a causal relationship from data annotation to causal reasoning. Other causal claims connect it to coherent empathetic responses, while other single-paper links place it in broader reasoning, question-answering, narrative, visual, structured, and physical-world settings. No correlation links are reported.

## Sources

**[Can Large Language Models Infer Causation from Correlation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/7b75a7339dfb256ee4b4bec028a6890b-Paper-Conference.pdf)**
> The ability to infer cause-and-effect relationships from observing events and object interactions in a video, such as determining which object activates a device.

**[Limits of Transformer Language Models on Learning to Compose Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e797d5139ad94fc2dc2080c09119f29-Paper-Conference.pdf) (as "Causal inference")**
> The ability to infer cause-and-effect relationships from data, identified as an area where LLMs exhibit failures.

**[OlympicArena: Benchmarking Multi-discipline Cognitive Reasoning for Superintelligent AI](https://proceedings.neurips.cc/paper_files/paper/2024/file/222d2eaf24cf8259a35d6c7130d31425-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Cause-and-effect reasoning")**
> The ability to identify and establish causal relationships between events, understanding reasons and their consequences.

**[Advancing Video Anomaly Detection: A Concise Review and a New Dataset](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3c5af1f56fc73eef1ba0f442739f5ca-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Causation understanding")**
> The ability to infer cause-and-effect relationships from contextual information, such as identifying the reasons for an anomalous event in a video.

**[MMWorld: Towards Multi-discipline Multi-faceted World Model Evaluation in Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/4364fef031fdf7bfd9d1c9c56b287084-Paper-Conference.pdf) (as "Attribution understanding")**
> The ability to identify cause-and-effect relations in a video, including causal explanations and counting-related attribution questions.

**[Reasoning Elicitation in Language Models via Counterfactual Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/bf145010b30dc5f14fa87dc152074e4d-Paper-Conference.pdf) (as "Causal consistency")**
> The property that a model's answers to factual and counterfactual questions about the same context are logically coherent and correctly reflect the underlying causal relationships.

**[Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf) (as "Causal understanding")**
> The latent ability of a system to comprehend the underlying causal structure of an environment, distinct from reflecting mere correlations.

**[LLM Enhancers for GNNs: An Analysis from the Perspective of Causal Mechanism Identification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25o/gao25o.pdf) (as "Causal relationship modeling")**
> The latent ability of a model to capture and represent true cause-and-effect dependencies between variables in the data, as defined by a high-level causal model.

**[ACCESS : A Benchmark for Abstract Causal Event Discovery and Reasoning](https://aclanthology.org/2025.naacl-long.49.pdf) (as "Commonsense causal reasoning")**
> The ability to reason about causality in everyday situations, playing a vital role in developing a mental model of reality.

**[Benchmark Profiling: Mechanistic Diagnosis of LLM Benchmarks](https://aclanthology.org/2025.emnlp-main.789.pdf) (as "Commonsense and causal reasoning")**
> The ability to infer plausible causes, effects, or next events from everyday situations using common-sense world knowledge.

## Relationships

### Causal reasoning →
- **COPA** (measurements) — *measured_by*
  > The Choice of Plausible Alternatives (COPA) dataset is specifically designed to evaluate causal reasoning abilities in natural language processing models.
  - [Enhancing In-Context Learning Performance with just SVD-Based Weight Pruning: A Theoretical Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/448444518637da106d978ae7409d9789-Paper-Conference.pdf)
- **ACRE** (measurements) — *measured_by*
  > The ACRE dataset (Zhang et al., 2021) evaluates how well vision systems perform causal induction (Section 4.1).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **CREPE** (measurements) — *measured_by*
  > We evaluate our LLM cascade approaches on six datasets, covering... (3) causal reasoning, including CREPE (Zhang et al., 2023). (Section 3.1)
  - [Large Language Model Cascades with Mixture of Thought Representations for Cost-Efficient Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5de11e930c1bbfda5d4fc9d2b0924032-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > A better approximation of the underlying causal model generally translates to more robust agents, implying that world models should be causality-aware
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
- **NExT-QA** (measurements) — *measured_by*
  > We conduct experiments on three popular VideoQA datasets: NExT-QA, STAR, and IntentQA (Xiao et al., 2021; Wu et al., 2021; Li et al., 2023a), which demand both causal and temporal reasoning abilities.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **STAR** (measurements) — *measured_by*
  > We conduct experiments on three popular VideoQA datasets: NExT-QA, STAR, and IntentQA (Xiao et al., 2021; Wu et al., 2021; Li et al., 2023a), which demand both causal and temporal reasoning abilities.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Coherence** (constructs) — *causes*
  > causal reasoning is pivotal for maintaining coherent and specific empathetic interactions (Section 5.2)
  - [ECC: An Emotion-Cause Conversation Dataset for Empathy Response](https://aclanthology.org/2025.emnlp-main.306.pdf)
- **Empathetic response generation** (behaviors tasks) — *causes*
  > The ablation study highlights the critical role of cause labels in the CAER model’s performance... the absence of cause labels (w/o C) leads to a more significant decline in both language quality and lexical variety. (Section 5.2)
  - [ECC: An Emotion-Cause Conversation Dataset for Empathy Response](https://aclanthology.org/2025.emnlp-main.306.pdf)
- **COPAL-ID** (measurements) — *measured_by*
  > COPAL-ID (Wibowo et al., 2023) is an Indonesian causal reasoning dataset written from scratch by native speakers in both standard and Jakartan Indonesian, a widely spoken dialect. (Section 5.2.1)
  - [Multilingual Language Model Pretraining using Machine-translated Data](https://aclanthology.org/2025.emnlp-main.1426.pdf)

### Associated with
- **Causal discovery** (behaviors tasks)
  > Causal Reasoning tasks include causal discovery, cause attribution, and causal effect estimation [30, 58, 65]. (Section 2.2)
  - [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)
- **Counterfactual reasoning** (constructs)
  > Counterfactual reasoning is an essential task of causal reasoning. (Section 2.2)
  - [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)
- **Video question answering** (behaviors tasks)
  > Wang et al. (2023b) and Ko et al. (2023) try to leverage LLaMA’s (Touvron et al., 2023) knowledge of temporal and causal reasoning to address the complexities of VideoQA.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Visual reasoning** (constructs)
  > Our task suite encompasses a comprehensive set of perceptual and cognitive tasks, including summarization, perception (recall, tracking), visual reasoning (spatial, temporal, predictive, causal, counterfactual), and navigation (room-to-room, object retrieval) tasks. (Section 2.1)
  - [HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Causal inference** (behaviors tasks)
  > Causal Reasoning tasks include causal discovery, cause attribution, and causal effect estimation [30, 58, 65]. (Section 2.2)
  - [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > Reasoning is a cognitive process that involves drawing conclusions, making judgments, or forming inferences based on facts or premises. This process has been explored from various perspectives. ... Causal reasoning [26] focuses on discerning the relationship between a cause and its effect, aiming to understand how certain events can impact other.
  - [Does Reasoning Emerge? Examining the Probabilities of Causation in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a1f97d2b922da92e880d13b7d2bf02-Paper-Conference.pdf)
- **Memorization** (constructs)
  > we will focus on causal reasoning as it provides us with a clear distinction between recall and reasoning1: the former is limited to inferring statistical correlations, whereas the latter involves working with interventions and counterfactuals (Pearl, 2000).
  - [Reasoning Elicitation in Language Models via Counterfactual Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/bf145010b30dc5f14fa87dc152074e4d-Paper-Conference.pdf)
- **Counterfactual question answering** (behaviors tasks)
  > “causal reasoning through counterfactual question answering is lacking”
  - [Reasoning Elicitation in Language Models via Counterfactual Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/bf145010b30dc5f14fa87dc152074e4d-Paper-Conference.pdf)
- **Narrative understanding** (constructs)
  > struggle with causal reasoning derived from aspect, raising concerns about their ability to fully comprehend narratives. (Abstract)
  - [How LLMs Comprehend Temporal Meaning in Narratives: A Case Study in Cognitive Evaluation of LLMs](https://aclanthology.org/2025.acl-long.1415.pdf)
- **Structured reasoning** (constructs)
  > STRICTA breaks down the assessment into a graph of interconnected reasoning steps drawing on causality theory (Pearl, 1995).
  - [STRICTA: Structured Reasoning in Critical Text Assessment for Peer Review and Beyond](https://aclanthology.org/2025.acl-long.1107.pdf)
- **Scientific question answering** (behaviors tasks)
  > Task 1: ScienceQ&A Generation (LLMgen) Generates a synthesized summary response A to a research question Q using abstracts from the top N relevant papers. It must demonstrate (1) domain knowledge, (2) numerical proficiency, (3) long-range context understanding, and (4) cause-and-effect reasoning (Wadden et al., 2020). (Section 2)
  - [YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf)
- **Physical world understanding** (constructs)
  > Therefore, we would expect an improvement in causal reasoning to carry with it improvement on intuitive physics as well. (Section 3.4)
  - [Testing the Limits of Fine-Tuning for Improving Visual Cognition in Vision Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schulze-buschoff25a/schulze-buschoff25a.pdf)
- **Planning** (constructs)
  > “LLMs have recently shown great promise in planning and reasoning applications. These tasks demand robust systems, which arguably require a causal understanding of the environment.”
  - [Language Agents Meet Causality -- Bridging LLMs and Causal World Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5c5bc3553815adb4d1a8a5b8701e41a9-Paper-Conference.pdf)
