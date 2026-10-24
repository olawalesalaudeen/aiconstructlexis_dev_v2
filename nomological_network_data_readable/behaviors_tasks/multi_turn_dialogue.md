# Multi-turn dialogue
**Type:** Behavior  
**Referenced in:** 108 papers  
**Also known as:** Multi-turn conversation, Multi-round dialogue, Multi-turn communication, Multi-turn chat, Interactive communication, Multi-round conversation, Multi-turn dialogue understanding, Open-ended conversation, Extended conversation, Dialogue, Casual conversation, Conversation, Conversational interaction, Multi-turn dialog, Human-like conversation, General chat, Open-ended interaction, Agent chatting, Multi-turn conversational interaction  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is sustained back-and-forth conversation over multiple turns, where later responses depend on earlier context and are expected to remain coherent and contextually relevant. Many definitions add a task component, describing exchanges that are goal-directed, resolve a user's request, progressively clarify intent, or support problem solving, while a smaller line treats it more broadly as open-ended or casual conversation; a few also make judged response quality or guideline compliance explicit. Most papers place it in user-assistant dialogue, though some extend it to agent-agent, student-tutor, doctor-patient, or agent-environment interaction, and a few make memory or retrieval from earlier turns part of the behavior.

**Variants.** Papers use many nearby labels for this behavior, including multi-turn conversation, multi-round dialogue or conversation, multi-turn chat, conversational interaction, dialogue, agent chatting, and open-ended interaction. The settings range from task-oriented dialog, tool use, instruction alignment, and safety probing to open-domain chat, social simulation, collaborative task resolution, tutoring, code editing, and medical consultation. A recurring multimodal line studies conversations grounded in images, multiple images, GUIs, graphs, or other visual content, and some papers describe the interaction as progressively refining output or answering follow-up questions from conversation history.

**Space of elicitation and scores.** Papers link this behavior to 11 measurement instruments, with MT-Bench the most recurrent, followed by LLaVA-Bench-in-the-Wild, Chatbot Arena, GUI-WORLD, and HH-RLHF. These instruments are mostly benchmarks or datasets: MT-Bench is described as multi-turn questions or dialogues across domains, Chatbot Arena as open-ended conversational ranking, and GUI-WORLD as including multi-round conversation. Among the remaining links, one scoring setup uses a judge model to assign a 1 to 5 similarity score to free-form, multiple-round conversations, and some resources are described as related rather than as direct measures.

**What it is taken as evidence of.** Papers link it to 4 constructs, but they do not present a single shared construct that it indicates. Most links are recorded as related: multi-turn dialogue is related to instruction following ability, long-context understanding, and robustness. A smaller line makes a different claim, with one paper claiming a causal relationship from multi-turn dialogue to interpretability and explainability, tied to allowing follow-up questions and detailed natural language explanations.

## Sources

**[Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)**
> The behavior of maintaining a coherent and contextually relevant conversation over multiple exchanges with a user.

**[#InsTag: Instruction Tagging for Analyzing Supervised Fine-tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/9dae2a90bae49dc874ce1ca8fcc20879-Paper-Conference.pdf) (as "Multi-turn conversation")**
> Responding coherently across multiple dialogue turns in a conversational benchmark setting.

**[Automated Multi-level Preference for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2e3073cb65608aa887bb945c382e687f-Paper-Conference.pdf) (as "Multi-round dialogue")**
> Engaging in a sequence of conversational turns with a user, maintaining context across multiple rounds of interaction.

**[Autonomous Agents for Collaborative Task under Information Asymmetry](https://proceedings.neurips.cc/paper_files/paper/2024/file/0534abc9e6db91683d82186ef0d68202-Paper-Conference.pdf) (as "Multi-turn communication")**
> Exchanging utterances over multiple turns to progressively resolve a task.

**[SGLang: Efficient Execution of Structured Language Model Programs](https://proceedings.neurips.cc/paper_files/paper/2024/file/724be4472168f31ba1c9ac630f15dec8-Paper-Conference.pdf) (as "Multi-turn chat")**
> Engaging in a conversation with a user over multiple sequential exchanges of input and output.

**[Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/e45caa3d5273d105b8d045e748636957-Paper-Conference.pdf) (as "Interactive communication")**
> Engaging in a multi-turn dialogue with a user to exchange information or complete a task.

**[GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3926df1a00c9abf056df7bcf253d026a-Paper-Conference.pdf) (as "Multi-round conversation")**
> Engaging in a sequential, multi-turn dialogue about a GUI, where the model's responses must account for the conversational history.

**[From Isolated Conversations to Hierarchical Schemas: Dynamic Tree Memory Representation for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/0382cb76309820f71c6eacd47b36ce71-Paper-Conference.pdf) (as "Multi-turn dialogue understanding")**
> Processing and responding to conversational exchanges that span multiple interaction rounds with information retrieval from prior dialogue.

**[Assessing Safety Risks and Quantization-aware Safety Patching for Quantized Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ci/chen25ci.pdf) (as "Open-ended conversation")**
> Engaging in multi-turn, unconstrained dialogue with a user on a variety of topics.

**[Circuit Complexity Bounds for RoPE-based Transformer Architecture](https://aclanthology.org/2025.emnlp-main.561.pdf) (as "Extended conversation")**
> The observable behavior of maintaining a coherent and contextually appropriate dialogue over many turns.

**[Cache-Efficient Posterior Sampling for Reinforcement Learning with LLM-Derived Priors Across Discrete and Continuous Domains](https://aclanthology.org/2025.emnlp-main.560.pdf) (as "Dialogue")**
> Engaging in multi-turn, coherent conversation with a user or another agent.

**[CIFLEX: Contextual Instruction Flow for Sub-task Execution in Multi-Turn Interactions with a Single On-Device LLM](https://aclanthology.org/2025.emnlp-main.533.pdf) (as "Casual conversation")**
> Engaging in open-domain, non-task-oriented dialogue about everyday topics such as weather, hobbies, or daily life.

**[Scalable Data Synthesis through Human-like Cognitive Imitation and Data Recombination](https://aclanthology.org/2025.emnlp-main.236.pdf) (as "Conversation")**
> Engaging in interactive, multi-turn dialogue with a user.

**[UltraIF: Advancing Instruction Following from the Wild](https://aclanthology.org/2025.emnlp-main.945.pdf) (as "Conversational interaction")**
> The act of participating in a multi-turn dialogue and generating responses that are judged to be of high quality.

**[Collaborative Rational Speech Act: Pragmatic Reasoning for Multi-Turn Dialog](https://aclanthology.org/2025.emnlp-main.1145.pdf) (as "Multi-turn dialog")**
> Engaging in a conversation that extends over multiple back-and-forth exchanges between participants.

**[LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/687163285b8affc8ee933bdca8e75747-Paper-Conference.pdf) (as "Human-like conversation")**
> Engaging in open-ended dialogue that mimics the patterns, coherence, and interactivity of human conversation.

**[CriticEval: Evaluating Large-scale Language Model as Critic](https://proceedings.neurips.cc/paper_files/paper/2024/file/7b7d7985f62284060d65f532ed2ea5fa-Paper-Conference.pdf) (as "General chat")**
> The task of engaging in open-domain, multi-turn conversation with a user.

**[Unbounded: A Generative Infinite Game of Character Life Simulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/da2411768acb844b255bb6770e5a71c7-Paper-Conference.pdf) (as "Open-ended interaction")**
> The model's participation in unconstrained, free-form interactions with a user, generating responses to a wide variety of natural language inputs without pre-defined rules.

**[GuideBench: Benchmarking Domain-Oriented Guideline Following for LLM Agents](https://aclanthology.org/2025.acl-long.557.pdf) (as "Agent chatting")**
> Maintaining coherent and guideline-compliant responses across multiple conversational turns in an agent-user dialogue.

**[Pixel-Level Reasoning Segmentation via Multi-turn Conversations](https://aclanthology.org/2025.acl-long.864.pdf) (as "Multi-turn conversational interaction")**
> Engaging in a sequence of dialogue turns with a user, where each response builds on prior context to progressively clarify intent and refine output.

## Relationships

### Multi-turn dialogue →
- **MT-Bench** (measurements) — *measured_by*
  > MT-Bench includes a series of open-ended questions that assess LLM capabilities in multi-turn conversations and instruction-following
  - [Beyond Reverse KL: Generalizing Direct Preference Optimization with Diverse Divergence Constraints](https://proceedings.iclr.cc/paper_files/paper/2024/file/2b1d1e5affe5fdb70372cd90dd8afd49-Paper-Conference.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > LLaVA-Bench serves as a general benchmark for systematic comprehension, encompassing three categories: conversation, detailed description, and complex questions. (Section 4.2)
  - [Automated Multi-level Preference for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2e3073cb65608aa887bb945c382e687f-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > MT-bench and Vicuna-bench are designed to test the models' competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing through both multi-turn and single-turn dialogues.
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > We also enhance explainability, both by returning the retrieved subgraph, and through the use of conversational interfaces for 'chatting with a graph'
  - [G-Retriever: Retrieval-Augmented Generation for Textual Graph Understanding and Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/efaf1c9726648c8ba363a5c927440529-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > To assess free-form questions and multiple-round conversations, we utilize the LLM-as-a-Judge methodology, which assigns a similarity score ranging from 1 to 5 between MLLM’s response and a predefined golden answer... (Section 3.1)
  - [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3926df1a00c9abf056df7bcf253d026a-Paper-Conference.pdf)
- **Spec-Bench** (measurements) — *measured_by*
  > The benchmark includes various generation subtasks including multi-turn conversation
  - [Block Verification Accelerates Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e710b42b1a9ed898f607ec0f4fcc971-Paper-Conference.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > Chatbot Arena has become a cornerstone in LLM evaluation, offering rich datasets for ranking models in open-ended conversational tasks.
  - [A Statistical Framework for Ranking LLM-based Chatbots](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a4cd257678d986ba545b5d1aa9b5923-Paper-Conference.pdf)
- **GUI-WORLD** (measurements) — *measured_by*
  > “GUI-WORLD features various question types” and “multi-round conversation”
  - [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3926df1a00c9abf056df7bcf253d026a-Paper-Conference.pdf)
- **TableEval** (measurements) — *measured_by*
  > This approach accommodates various task types within diverse real-world industrial scenarios, including information retrieval, numerical analysis, table reasoning, data analysis, multi-turn dialogue, and understanding of table structures. (Section 3.1)
  - [TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363.pdf)

### Associated with
- **WildChat** (measurements)
  > this paper presents the WILDCHAT dataset, a comprehensive multi-turn, multi-lingual dataset consisting of 1 million timestamped conversations (Section 1).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **HelpSteer2** (measurements)
  > To ensure HelpSteer2 is effective for predicting rewards in multi-turn conversations, we included multi-turn prompts, which comprise approximately 29% of the samples.
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Instruction following ability** (constructs)
  > Can LLMs continuously follow the system message in multi-turn conversations? (Section 3.1)
  - [SysBench: Can LLMs Follow System Message?](https://proceedings.iclr.cc/paper_files/paper/2025/file/b917f916e7eed84ffe8f5e63492b2be8-Paper-Conference.pdf)
- **Robustness** (constructs)
  > Our MTU-LLaMA exhibits the most gradual decrease in performance, demonstrating its robustness to higher dialogue turns. (Section 3.2)
  - [MTU-Bench: A Multi-granularity Tool-Use Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d13b2d99519c5415661dad44ab7edcd-Paper-Conference.pdf)
- **Long-context understanding** (constructs)
  > Large language models (LLMs) have advanced to support long-context tasks such as document understanding (Li et al., 2024a), multi-turn dialogues (Yi et al., 2024), repository-level code completion (Jimenez et al., 2024), and complex reasoning (Zhou et al., 2025).
  - [LeanK: Learnable K Cache Channel Pruning for Efficient Decoding](https://aclanthology.org/2025.emnlp-main.1584.pdf)
