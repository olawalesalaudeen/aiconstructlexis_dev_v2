# Theory of mind
**Type:** Construct  
**Referenced in:** 36 papers  
**Also known as:** Theory of Mind, Belief modeling, Mental state reasoning, Belief formation, Action intention inference, Mental state tracking, Multi-agent mental state tracking, Intentionality understanding, Perspective separation  

## State of the Field

**Definition agreement:** Consensus. Most papers define theory of mind as the ability to attribute, infer, or reason about other agents' mental states such as beliefs, desires, intentions, knowledge, or emotions, often to predict or explain behavior in social or multi-agent settings. A few papers narrow this to specific cases like goal inference, false-belief tasks, hidden roles, or perspective taking, but these are framed as applications or facets of the same underlying mental-state reasoning ability rather than different phenomena.

**Space of definitions.** Across these papers, the prevailing usage treats theory of mind as an ability to attribute, infer, track, or reason about other agents' mental states, usually beliefs, intentions, desires, knowledge, emotions, or preferences, often so behavior can be predicted or interaction coordinated. Many definitions stay at this broad level, sometimes extending to communication, decentralized collaboration, information asymmetry, or the fact that others can hold mental states different from one's own. A smaller line of work narrows the construct to specific targets: estimating an opponent's payoff table in negotiation, inferring hidden roles or likely actions in games, inferring the goal of an observed human action sequence, or separating agents' perspectives from an omniscient view. The main disagreement is about scope, broad social and mental-state reasoning versus task-specific belief, intent, or perspective inference.

**Space of facets.** Papers that break the construct down foreground mental state tracking, belief inference, and perspective separation. Some work integrates perspective separation and belief inference in a unified framework, while other papers describe related tracking and perspective skills as abilities that underlie or sit within theory of mind. Nearby labels in these papers include belief modeling and multi-agent mental state tracking, with several other labels used for related facets. A smaller extension moves from single-agent attribution to group settings, defining multi-agent mental state tracking for triadic or tetradic interactions under asymmetric information and mixed social attitudes.

**Space of measurement.** In these papers, operationalization is benchmark-centered: theory of mind is linked to 5 measurement instruments and 3 behavioral indicators. The linked instruments are MMToM-QA, FANToM, MuSR, TactfulToM, and ToM-SSI. These are benchmark-style evaluations of multimodal mental-state inference, multistep soft reasoning in social situations, white-lie understanding through info-state questions, and situated social interactions; at the behavioral level, the linked indicators center on generating hypotheses about other agents, tracking states, and decomposing tasks. These measurements usually target mental-state inference directly, though several narrow it to multimodal, white-lie, or situated interaction settings.

**Links.** Beyond measurement, papers link theory of mind to 7 constructs. Related links connect it to perspective taking and several other constructs, and one paper treats state tracking as a skill underlying theory-of-mind reasoning. For causal claims, one paper claims a causal relationship from theory of mind to hypothesis generation and task decomposition through a module that generates hypotheses about other agents' strategies, and another claims a causal relationship from theory of mind to pragmatic understanding, stating that pragmatic inferences often rely on theory-of-mind abilities. No correlational link is recorded among the linked relationships.

## Sources

**[Can LLMs Keep a Secret? Testing  Privacy  Implications of Language Models  via Contextual Integrity Theory](https://proceedings.iclr.cc/paper_files/paper/2024/file/08305d8b2ddab98932c163ea73df065f-Paper-Conference.pdf)**
> The latent ability of a model to infer the beliefs, preferences, and intentions of other agents, enabling more effective negotiation through accurate modeling of the opponent's payoff structure.

**[Building Cooperative Embodied Agents Modularly with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/54b8b4e0b4ba4aad112e84f32e3b5dbb-Paper-Conference.pdf) (as "Theory of Mind")**
> The ability to model and reason about the mental states, intentions, and actions of other agents, enabling effective coordination and communication in decentralized settings.

**[Learning to Discuss Strategically: A Case Study on One Night Ultimate Werewolf](https://proceedings.neurips.cc/paper_files/paper/2024/file/8cea78701eb986f3ec357eb9b7c6badd-Paper-Conference.pdf) (as "Belief modeling")**
> The latent capability to infer hidden roles and states of other players based on observations, dialogue, and game rules.

**[SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf) (as "Mental state reasoning")**
> The ability to infer and reason about the beliefs, desires, and intentions of other agents to predict their actions.

**[Cooperate or Collapse:  Emergence of Sustainable Cooperation in a Society of LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/ca9567d8ef6b2ea2da0d7eed57b933ee-Paper-Conference.pdf) (as "Belief formation")**
> The ability to form a belief about the likely actions or intentions of other agents in a multi-agent system.

**[Think Then React: Towards Unconstrained Action-to-Reaction Motion Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea0b28cbbd0cbc45ec4ac38e92da9cb2-Paper-Conference.pdf) (as "Action intention inference")**
> The latent ability of the model to infer the semantic meaning and goal of an observed human action sequence.

**[TactfulToM: Do LLMs have the Theory of Mind ability to understand White Lies?](https://aclanthology.org/2025.emnlp-main.1272.pdf) (as "Mental state tracking")**
> The ability to accurately attribute and follow the mental states of different agents, such as their beliefs and knowledge, within a dynamic context.

**[ToM-SSI: Evaluating Theory of Mind in Situated Social Interactions](https://aclanthology.org/2025.emnlp-main.1642.pdf) (as "Multi-agent mental state tracking")**
> The ability to simultaneously reason about the mental states of multiple agents in a group interaction, especially under asymmetric information and mixed social attitudes.

**[Core Knowledge Deficits in Multi-Modal Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25p/li25p.pdf) (as "Intentionality understanding")**
> The ability to infer the goals or desires of other agents.

**[From Black Boxes to Transparent Minds: Evaluating and Enhancing the Theory of Mind in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bj/li25bj.pdf) (as "Perspective separation")**
> The model's internal ability to distinguish and represent cognitive information from different agents' points of view, separate from an omniscient perspective.

## Relationships

### Theory of mind →
- **MMToM-QA** (measurements) — *measured_by*
  > For evaluation, we use the MMToM-QA (Jin et al., 2024), an evaluation benchmark aimed at evaluating ToM reasoning over multimodal situations. (Section 4.1)
  - [Overcoming Multi-step Complexity in Multimodal Theory-of-Mind Reasoning: A Scalable Bayesian Planner](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bk/zhang25bk.pdf)
- **MuSR** (measurements) — *measured_by*
  > “The domains we address here, murder mysteries, object placement, and team assignment, involve commonsense reasoning about physical (Bisk et al., 2020) and social situations (Sap et al., 2019), theory-of-mind, and more.”
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
- **FANToM** (measurements) — *measured_by*
  > We evaluate our fine-tuned EXPLORETOM-8B model on five prominent theory of mind benchmarks: ToMi (Le et al., 2019), Hi-ToM (Wu et al., 2023), BigToM (Gandhi et al., 2024), OpenToM (Xu et al., 2024), and FAN-ToM (Kim et al., 2023). (Section 4)
  - [Explore Theory of Mind: program-guided adversarial data generation for theory of mind reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a901d5540789a086ee0881a82211b63d-Paper-Conference.pdf)
- **Hypothesis generation** (behaviors tasks) — *causes*
  > The ToM module generates hypotheses about these latent variables in natural language. (Section 3.2)
  - [Hypothetical Minds: Scaffolding Theory of Mind for Multi-Agent Tasks with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/12f483f624b378f9f3058d8ecd3c7ff5-Paper-Conference.pdf)
- **Pragmatic understanding** (constructs) — *causes*
  > For humans, pragmatic inferences often rely on Theory of Mind (ToM) abilities
  - [Are explicit belief representations necessary? A comparison between Large Language Models and Bayesian probabilistic models](https://aclanthology.org/2025.naacl-long.572.pdf)
- **Linear probing** (measurements) — *measured_by*
  > Using logistic regression, we performed binary classification on the representations of positive and negative samples to identify attention heads that are sensitive to perspective separation and belief representation.
  - [From Black Boxes to Transparent Minds: Evaluating and Enhancing the Theory of Mind in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bj/li25bj.pdf)
- **ToM-SSI** (measurements) — *measured_by*
  > We introduce ToM-SSI, the first evaluation benchmark that addresses all aforementioned limitations by evaluating ToM abilities in Situated Social Interactions (Section 1).
  - [ToM-SSI: Evaluating Theory of Mind in Situated Social Interactions](https://aclanthology.org/2025.emnlp-main.1642.pdf)
- **TactfulToM** (measurements) — *measured_by*
  > Our evaluation framework employs a progressive three-tier question hierarchy: (A) Info-State Questions assesses basic mental state tracking...
  - [TactfulToM: Do LLMs have the Theory of Mind ability to understand White Lies?](https://aclanthology.org/2025.emnlp-main.1272.pdf)
- **Planning** (constructs) — *causes*
  > We introduce the Theory of Mind module that scaffolds the high-level planning process by generating hypotheses about other agents' strategies in natural language.
  - [Hypothetical Minds: Scaffolding Theory of Mind for Multi-Agent Tasks with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/12f483f624b378f9f3058d8ecd3c7ff5-Paper-Conference.pdf)

### Associated with
- **Social intelligence** (constructs)
  > Reasoning about other people’s intentions, goals, thoughts, and beliefs is a foundation of social intelligence. Known as Theory of Mind (ToM) (Premack & Woodruff, 1978), this capability is crucial for effective human interaction. (Section 1)
  - [Explore Theory of Mind: program-guided adversarial data generation for theory of mind reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a901d5540789a086ee0881a82211b63d-Paper-Conference.pdf)
- **State tracking** (behaviors tasks)
  > We show that LLMs struggle with basic state tracking, a fundamental skill underlying theory of mind reasoning: tracking mental states necessarily requires being able to track states. (Section 1)
  - [Explore Theory of Mind: program-guided adversarial data generation for theory of mind reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a901d5540789a086ee0881a82211b63d-Paper-Conference.pdf)
- **Evaluation** (behaviors tasks)
  > Through ablations and comparisons against LLM-agent baselines, we identify the critical role of hypothesis evaluation and refinement within the ToM Module. (Section 1)
  - [Hypothetical Minds: Scaffolding Theory of Mind for Multi-Agent Tasks with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/12f483f624b378f9f3058d8ecd3c7ff5-Paper-Conference.pdf)
- **Belief reasoning** (constructs)
  > The ability to infer intent, known as belief reasoning in Theory of Mind (ToM) (Premack and Woodruff, 1978), enables humans to interpret others’ behavior by attributing mental states such as beliefs and intentions to them.
  - [Preemptive Detection and Correction of Misaligned Actions in LLM Agents](https://aclanthology.org/2025.emnlp-main.12.pdf)
- **Perspective taking** (constructs)
  > This ability is called perspective taking – a foundational ability in ToM (Masangkay et al., 1974) (Section 2.2).
  - [ToM-SSI: Evaluating Theory of Mind in Situated Social Interactions](https://aclanthology.org/2025.emnlp-main.1642.pdf)
- **Social reasoning** (constructs)
  > SOTA models have also struggled with text-based QA tasks that probe competencies relevant to social reasoning, specifically theory-of-mind to interpret the goals and beliefs of characters (Le et al., 2019; Shapira et al., 2024; Ullman, 2023; Kim et al., 2023). (Section 2)
  - [Social Genome: Grounded Social Reasoning Abilities of Multimodal Models](https://aclanthology.org/2025.emnlp-main.1264.pdf)
