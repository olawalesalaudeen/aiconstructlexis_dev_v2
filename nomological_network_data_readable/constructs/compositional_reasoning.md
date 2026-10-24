# Compositional reasoning
**Type:** Construct  
**Referenced in:** 40 papers  
**Also known as:** Composite task solving  

## State of the Field

**Definition agreement:** Conflicting. A substantial share of papers define compositional reasoning as understanding or generalizing to novel combinations and bindings of familiar components or relations, such as new subject-verb-object combinations, scene relations, event-attribute bindings, or rule-based combinations of linguistic elements. Another substantial share define it as decomposing complex tasks or questions into sequential subproblems or sub-actions and then combining intermediate solutions, so papers using these two definitions would not be studying the same phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats compositional reasoning as handling combinations of known parts: understanding novel configurations of familiar components, integrating multiple pieces of information or reasoning steps, or interpreting how objects, attributes, relations, acoustic events, or linguistic elements fit together. Several papers make this explicit with examples such as action recognition from known verb, subject, and object roles, understanding order and attribute binding across discrete acoustic events, or the capacity for "infinite use of finite means". A smaller line of work defines it more procedurally, as decomposing a complex task or question into sequential subtasks or sub-questions, solving them, and combining intermediate results, and one paper narrows this further to correct output on two-step composite tasks without explicit intermediate steps. The main axis of disagreement is whether the construct is framed mainly as relation-sensitive understanding of combined elements or as divide-and-conquer problem solving.

**Space of facets.** Papers organize the construct more by domain and task structure than by a single shared taxonomy. Some break it into relations among objects, attributes, and interactions in scenes or videos, others into order and attribute binding among acoustic events, multiple object transformations, or sequential substeps in arithmetic, planning, and question answering; one paper further describes a compositionality problem through Text, Image, and Group subtasks. Across these uses, the same label covers both interpreting elements jointly rather than in isolation and solving problems by combining partial solutions, while "composite task solving" names a narrower two-sequential-subtask case that overlaps with the latter framing.

**Space of measurement.** Operationalization is mostly benchmark-based. The construct is linked to 11 measurement instruments and 3 behavioral indicators; the most frequently linked instruments are Winoground, GQA, Cola (compositional image retrieval), SugarCrepe, and Bamboogle, with 6 other instruments. Papers operationalize it through tasks such as matching two images and captions that use the same words in different orders, real-world visual question answering, matching captions about relations between similar images, and answering complex questions, plus one human evaluation setup using rare or unusual audio prompts that combine unlikely or previously unseen events. These measures generally track the dominant definitions by testing combinations, relations, or sequential subtasks across visual, audio, code, video, and QA settings.

**Links.** Only a few non-measurement links are stated. GQA is related to compositional reasoning in one paper, which says its problems are more complex and require it; chain of thought is related in another, where step-by-step operations and intermediate results are said to let a model learn the individual components of compositional tasks. Code refactoring and visual question answering are also related in single papers: multi-file refactoring is described as requiring composition of multiple smaller changes, and one analysis says that in many compositional reasoning tasks, interactions are central and marginal attributions are insufficient. No causal or correlational relationships are claimed.

## Sources

**[CRAFT: Customizing LLMs by Creating and Retrieving from Specialized Toolsets](https://proceedings.iclr.cc/paper_files/paper/2024/file/af31604708f3e44b4de9fdfa6dcaa9d1-Paper-Conference.pdf)**
> The ability to understand and reason about novel combinations of familiar components, such as recognizing an action composed of a known verb, subject, and object in a new configuration.

**[Internal Chain-of-Thought: Empirical Evidence for Layer-wise Subtask Scheduling in LLMs](https://aclanthology.org/2025.emnlp-main.1147.pdf) (as "Composite task solving")**
> Producing correct outputs for tasks that require two sequential subtask applications, such as retrieving knowledge and then transforming it, without explicit intermediate steps in the input.

## Relationships

### Compositional reasoning →
- **Winoground** (measurements) — *measured_by*
  > Fine-tuning on this data enhances the model’s ability to distinguish between similar images, showing improvements on challenging benchmarks like Winoground, MMVP, and EQBEN, which test compositional reasoning and fine-grained understanding. (Section 6.1)
  - [VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf)
- **GQA** (measurements) — *measured_by*
  > ...GQA (Hudson and Manning, 2019) for real-world compositional reasoning... (Section 3.1)
  - [Does Acceleration Cause Hidden Instability in Vision Language Models? Uncovering Instance-Level Divergence Through a Large-Scale Empirical Study](https://aclanthology.org/2025.emnlp-main.425.pdf)
- **Cola (compositional image retrieval)** (measurements) — *measured_by*
  > We first evaluate our CoVLM on compositional reasoning tasks, including... matching the correct captions describing the relation between two images with similar entities (Cola, (Ray et al., 2023))... (Section 4.1)
  - [CoVLM: Composing Visual Entities and Relationships in Large Language Models Via Communicative Decoding](https://proceedings.iclr.cc/paper_files/paper/2024/file/47561f5e1dc53c7d119185e217b523d0-Paper-Conference.pdf)
- **SugarCrepe** (measurements) — *measured_by*
  > We comprehensively analyze the compositional understanding of models on the SugarCrepe benchmark, as detailed in Table 4. (Section 4.2)
  - [TripletCLIP:  Improving Compositional Reasoning of CLIP via Synthetic Vision-Language Negatives](https://proceedings.neurips.cc/paper_files/paper/2024/file/39781da4b5d05bc2908ce08e43bc6404-Paper-Conference.pdf)
- **MMVP** (measurements) — *measured_by*
  > Fine-tuning on this data enhances the model’s ability to distinguish between similar images, showing improvements on challenging benchmarks like Winoground, MMVP, and EQBEN, which test compositional reasoning and fine-grained understanding. (Section 6.1)
  - [VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf)
- **CREPE** (measurements) — *measured_by*
  > Crepe [16] also evaluates several SOTA VLMs and highlights the lack of CR abilities.
  - [ConMe: Rethinking Evaluation of Compositional Reasoning for Modern VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/28aad3b3b315d86910d7f4ee2867dfa4-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BigCodeBench** (measurements) — *measured_by*
  > BigCodeBench frequently invokes a sequence of function calls from multiple libraries to solve a single task, requiring significant compositional reasoning ability for task-solving. (Section 3)
  - [BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6a90bcc2aa470c3871b2d39a67d26e8-Paper-Conference.pdf)
- **FreshQA** (measurements) — *measured_by*
  > Experimental results on CuQA and FreshQA (Vu et al., 2023) datasets show the superiority of Self-DC in terms of both effectiveness and efficiency, revealing its promising potential to solve compositional reasoning problem. (Section 1)
  - [Self-DC: When to Reason and When to Act? Self Divide-and-Conquer for Compositional Unknown Questions](https://aclanthology.org/2025.naacl-long.331.pdf)
- **Bamboogle** (measurements) — *measured_by*
  > Bamboogle (Press et al., 2023) includes complex questions that Google answers incorrectly, assessing compositional reasoning. (Section 4.1)
  - [Search-o1: Agentic Search-Enhanced Large Reasoning Models](https://aclanthology.org/2025.emnlp-main.276.pdf)
- **NExT-QA** (measurements) — *measured_by*
  > We evaluate on general video understanding benchmarks: ... NeXTQA (Xiao et al., 2021) (compositional reasoning)
  - [VideoPASTA: 7K Preference Pairs That Matter for Video-LLM Alignment](https://aclanthology.org/2025.emnlp-main.1647.pdf)

### Associated with
- **Chain of thought** (behaviors tasks)
  > “This format includes step-by-step operations and intermediate results, allowing the model to learn the individual components of compositional tasks.”
  - [Teaching Arithmetic to Small Transformers](https://proceedings.iclr.cc/paper_files/paper/2024/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
- **Code refactoring** (behaviors tasks)
  > Unlike isolated function-level edits, multi-file refactoring requires comprehensive reasoning and composition of multiple smaller changes. (Section 1)
  - [RefactorBench: Evaluating Stateful Reasoning in Language Agents Through Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b44ee74539ea77d6a0d50d468724371-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks)
  > In many compositional reasoning tasks, interactions are key and marginal attributions are insufficient. We illustrate this using an image of a dog playing with a basketball and prompting the LLaVA-NeXT-Mistral-7B model (Liu et al., 2023) with “What is shown in this image?”. (Sec. 7.2)
  - [SPEX: Scaling Feature Interaction Explanations for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kang25a/kang25a.pdf)
