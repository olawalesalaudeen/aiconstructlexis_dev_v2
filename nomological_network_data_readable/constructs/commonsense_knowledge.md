# Commonsense knowledge
**Type:** Construct  
**Referenced in:** 31 papers  
**Also known as:** Common sense, Common-sense knowledge, Commonsense, Common sense knowledge  

## State of the Field

**Definition agreement:** Consensus. Most papers define commonsense knowledge as implicit or latent everyday background knowledge about the world, or the ability to use that knowledge to make plausible judgments, inferences, and decisions in ordinary situations. A few definitions narrow this to particular tasks or domains such as planning, multimodal QA, driving, or physical-world cases, but these are presented as applications of the same core construct rather than different phenomena.

**Space of definitions.** Most papers treat this construct as implicit or latent everyday world knowledge, real-world background knowledge, or general world knowledge encoded in a model and used to reason about contextualized situations and make ordinary judgments. Several definitions make this application-oriented, describing knowledge used for planning, multimodal understanding, household work, geospatial resolution, or driving, and one paper says it supports reasoning about "complex and often contextualized situations." A smaller line of work uses the same label for a capability rather than latent knowledge, defining it as the ability or tendency to understand everyday situations, make plausible judgments, or generate inferences aligned with general human knowledge and intuition.

**Space of facets.** The papers mainly present the construct in lists of model abilities rather than as a taxonomy with explicit subtypes. They use several near-synonymous labels, including "commonsense knowledge," "commonsense," "common-sense knowledge," and "common sense," and place it alongside reasoning, language comprehension, world knowledge, factualness, and scientific knowledge. Some authors narrow the same label to particular content, such as typical object properties, functions, and relationships, physical-world understanding, or background knowledge used in traffic scenarios.

**Space of measurement.** Operationalization is broad and task-based: papers link the construct to 7 measurement instruments, 3 behavioral indicators, and 2 constructs. The named instruments are evaluation tasks and task environments, most often A-OKVQA, ALFWorld, InfoSeek, MME, and MMLU, plus 2 other instruments. Papers make the measurement explicit by saying InfoSeek and A-OKVQA rely on commonsense knowledge, by framing ALFWorld as household work that depends on it, by using MME's commonsense reasoning sub-task, and by treating MMLU performance as evidence that such knowledge is preserved after fine-tuning.

**Links.** Individual papers claim causal relationships from commonsense knowledge to action selection, generalization, and object placement. The action selection claim is framed as using the model's common-sense knowledge to perform decision-making for a traffic scenario, while the other causal claims say that commonsense knowledge enhances generalizable keypoint localization and is used to adjudicate item scale for object placement. Separate papers report that it is related to natural language inference, because some judgments require commonsense beyond the given premise, and related to general ability through discussion of degradation in other foundational capabilities including common sense; no correlational link is reported.

## Sources

**[Building Cooperative Embodied Agents Modularly with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/54b8b4e0b4ba4aad112e84f32e3b5dbb-Paper-Conference.pdf)**
> The implicit knowledge about the world required to reason about complex and contextualized situations.

**[Knowledge Fusion of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/4fd5cfd2e31bebbccfa5ffa354c04bdc-Paper-Conference.pdf) (as "Commonsense")**
> The model's ability to understand and make judgments about everyday situations and concepts that are typically taken for granted by humans.

**[DiLu: A Knowledge-Driven Approach to Autonomous Driving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/93c936b9e492def9c00782cab79dbc6d-Paper-Conference.pdf) (as "Common-sense knowledge")**
> The pre-existing, general world knowledge embedded within the LLM that can be applied to understand and make rational decisions in driving scenarios.

**[Motif: Intrinsic Motivation from Artificial Intelligence Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/a8de97fa77a09258b22880c230a83445-Paper-Conference.pdf) (as "Common sense")**
> The latent ability of a model to understand and reason about situations in a way that aligns with general human knowledge and intuition.

**[Architect: Generating Vivid and Interactive 3D Scenes with Hierarchical 2D Inpainting](https://proceedings.neurips.cc/paper_files/paper/2024/file/7cdf000d22c6cda21f3cbd7467aaf26f-Paper-Conference.pdf) (as "Common sense knowledge")**
> The latent knowledge a model possesses about the typical properties, functions, and relationships of objects and concepts in the everyday world, used here to adjudicate object scales.

## Relationships

### Commonsense knowledge →
- **A-OKVQA** (measurements) — *measured_by*
  > InfoSeek and A-OKVQA Rely on Commonsense Knowledge (RCK) (Table 2).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **Action selection** (behaviors tasks) — *causes*
  > In the Reasoning module, we utilize the experiences derived from the Memory module and the common-sense knowledge of the LLM to perform decision-making for the current traffic scenario. (Section 3.3)
  - [DiLu: A Knowledge-Driven Approach to Autonomous Driving with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/93c936b9e492def9c00782cab79dbc6d-Paper-Conference.pdf)
- **InfoSeek** (measurements) — *measured_by*
  > InfoSeek and A-OKVQA Rely on Commonsense Knowledge (RCK) (Table 2).
  - [SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge](https://proceedings.neurips.cc/paper_files/paper/2024/file/76954b4a44e158e738b4c64494977c6a-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > Figure 1: Across 7B to over 110B parameters, comparing lots of open- and closed-source LLVMs with Meteor on MME [35], MMB [36], MathVista [37], and AI2D [38] requiring diverse capabilities for image understanding, common-sense knowledge, non-object concept understanding, etc.
  - [Meteor: Mamba-based Traversal of Rationale for Large Language and Vision Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/473a9a75edc46eff5ff224d53d5f7294-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > we use TruthfulQA [27] to measure the reliability of the outputs generated by Aligner in terms of factualness and common sense. (Section 3.2)
  - [Aligner: Efficient Alignment by Learning to Correct](https://proceedings.neurips.cc/paper_files/paper/2024/file/a51a74b2d71387dc71cc29181b5519bb-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > Overall, we show that leveraging detailed keypoint descriptions through comprehensive text, combined with commonsense knowledge from LLMs, effectively enhances generalizable performance in keypoint localization. (Section 4.4)
  - [KptLLM: Unveiling the Power of Large Language Model for Keypoint Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe692980c5d9732cf153ce27947653a7-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > "Notably, TPO does not lead to performance degradation of LLMs on MMLU tasks, indicating that commonsense knowledge is preserved during the TPO fine-tuning process."
  - [TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf)
- **ScienceWorld** (measurements) — *measured_by*
  > We choose ScienceWorld (Wang et al., 2022), a complex interactive environment requiring skills in long-term memory, sub-task decomposition, and scientific and commonsense knowledge. (Section 4.2)
  - [EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms](https://aclanthology.org/2025.naacl-long.315.pdf)
- **ALFWorld** (measurements) — *measured_by*
  > "The main challenge of this benchmark is to locate the target object and fulfill household work with commonsense knowledge of LLMs."
  - [Enhancing Decision-Making of Large Language Models via Actor-Critic](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25c/dong25c.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > “Finally, OpenBookQA evaluates the understanding of common knowledge (Mihaylov et al., 2018).”
  - [BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)
- **Embodied planning** (behaviors tasks) — *causes*
  > Large language models(LLMs) trained on massive corpora are generally considered to have acquired common sense knowledge for task planning
  - [EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/8ec46cecdae5407662899c5f6698cd8b-Paper-Conference.pdf)

### Associated with
- **General ability** (constructs)
  > degradation in foundational LLM capabilities such as comprehension, reasoning, and common sense — an effect known as alignment tax (Section 1)
  - [Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf)
- **Object placement** (behaviors tasks)
  > Holodeck [Yang et al., 2024c], leveraging common sense from LLMs to generate floor plans and place objects (Section 4)
  - [Architect: Generating Vivid and Interactive 3D Scenes with Hierarchical 2D Inpainting](https://proceedings.neurips.cc/paper_files/paper/2024/file/7cdf000d22c6cda21f3cbd7467aaf26f-Paper-Conference.pdf)
