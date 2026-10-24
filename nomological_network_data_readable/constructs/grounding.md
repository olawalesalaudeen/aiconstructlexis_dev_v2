# Grounding
**Type:** Construct  
**Referenced in:** 34 papers  
**Also known as:** Grounding ability, Grounding capability, Visual localization, Grounded understanding  

## State of the Field

**Definition agreement:** Complementary. Most papers define grounding as a model linking language, intents, or answers to concrete, verifiable referents in a visual or interactive setting, especially by localizing the relevant image, UI, video, or environmental target. A few papers broaden this to anchoring responses or reward judgments in provided or retrieved context, and one to mapping language to structured data, so the definitions are not identical in scope but mostly present compatible facets of tying model behavior to external referents or evidence.

**Space of definitions.** Across the papers, grounding is most commonly framed as connecting language or high-level reasoning to concrete visual or environmental referents, especially by localizing image regions, UI elements, or fine-grained video details. Some papers make this explicit through precise spatial outputs such as coordinates or bounding boxes, or through identifying the target GUI element from a natural-language description. A smaller line of work broadens the term to anchoring responses in relevant context or evidence, incorporating retrieved context when judging RAG responses, or grounding abstract user preferences to fixed schemas. Papers also differ on whether grounding is a latent capability or an observable task: several describe an underlying ability, while one GUI line defines tasks such as widget listing, 'find text', and 'find widget'.

**Space of facets.** Papers often place grounding next to referring under spatial understanding, with one study describing referring and grounding as the two desired capabilities that stem from spatial understanding. In GUI settings, grounding is broken into tasks such as widget listing, finding text, and finding widgets, and some work labels failures as 'Grounding Error'. In video and event settings, grounding is tied to fine-grained object motions and interactions, and is related to temporal grounding and action localization. Related labels include visual localization, grounded understanding, and visual grounding, which papers use for similar spatial linking abilities.

**Space of measurement.** Operationalizations are narrower than the full range of definitions: grounding is linked to 2 measurement instruments and 6 behavioral indicators. The two instruments, InfiniBench and ScreenSpot, are both benchmarks: InfiniBench groups grounding-based skills as multiple-choice items, while ScreenSpot is used to evaluate GUI grounding across mobile, desktop, and website platforms. Beyond these, papers link grounding to action localization, object recognition, object tracking, temporal grounding, and tool use, and 1 other behavioral indicator; some GUI papers also operationalize it with tasks like widget listing and finding text. These operationalizations mostly follow the spatial and GUI or video uses of the term, rather than papers that define grounding as context anchoring, retrieved-context use, or schema mapping.

**Links.** Relationship claims are mostly isolated to individual papers. Papers claim causal relationships from grounding to visual reasoning and to agency, and one paper reports reciprocal causal relationships between grounding and UI element referring, phrased as adding grounding data improving referring performance and vice versa. Other work claims causal relationships from object recognition and object tracking to grounding. Separate papers report that grounding is related to tool use, spatial understanding, temporal grounding, and instruction following ability, and that action localization is related to grounding.

## Sources

**[Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)**
> The model's ability to connect high-level concepts and reasoning processes to fine-grained, low-level visual details in a video, such as object identities, motion, and interactions.

**[VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/804e757b7d7043c26701c3a313032101-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Grounding ability")**
> The capacity to produce precise spatial outputs for GUI elements, such as coordinates or bounding boxes, from screenshots.

**[Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7baab9bb701848e75f3cc119bdf57bc-Paper-Conference.pdf) (as "Grounding capability")**
> The latent ability to accurately associate textual references with specific visual locations or bounding boxes in a UI.

**[MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/aaa0ac4253da75faf9b0dc0dda062612-Paper-Conference.pdf) (as "Visual localization")**
> The latent ability to identify where in an image the relevant subject or evidence for a question is located.

**[CogCoM: A Visual Language Model with Chain-of-Manipulations Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1dcee1cd6890ab7fcdf173ec10526da9-Paper-Conference.pdf) (as "Grounded understanding")**
> The ability to connect language expressions to specific image regions or objects with precise spatial localization.

## Relationships

### Grounding →
- **Visual reasoning** (constructs) — *causes*
  > many visual reasoning problems in videos require grounding in fine-grained low-level information (Section 1).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **Agency** (constructs) — *causes*
  > Emergent agentic abilities are strongly dependent on basic abilities like grounding, world modeling, and self-reflection.
  - [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ScreenSpot** (measurements) — *measured_by*
  > We first evaluated AGUVIS’s fundamental GUI grounding capabilities using ScreenSpot (Cheng et al., 2024), a benchmark that spans mobile, desktop, and website platforms. (Section 3.1)
  - [Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ae/xu25ae.pdf)
- **InfiniBench** (measurements) — *measured_by*
  > InfiniBench skills: covers eight core skills, grouped into grounding-based (MCQ) and reasoning-based (open-ended) categories.
  - [InfiniBench: A Benchmark for Large Multi-Modal Models in Long-Form Movies and TV Shows](https://aclanthology.org/2025.emnlp-main.984.pdf)
- **Referring expression generation** (behaviors tasks) — *causes*
  > “Particularly, when adding grounding data into training, the referring performance gets improved, and vice versa.”
  - [Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)

### → Grounding
- **Object recognition** (behaviors tasks) — *causes*
  > Our multi-modal LRR model is grounded to relevant low-level visual information in the scene by stochastically introducing low-level surrogate tasks during training, including object recognition, re-identification, and tracking (Section 1).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **Object tracking** (behaviors tasks) — *causes*
  > Our multi-modal LRR model is grounded to relevant low-level visual information in the scene by stochastically introducing low-level surrogate tasks during training, including object recognition, re-identification, and tracking (Section 1).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **UI element referring** (behaviors tasks) — *causes*
  > “Particularly, when adding grounding data into training, the referring performance gets improved, and vice versa.”
  - [Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)

### Associated with
- **Tool use** (behaviors tasks)
  > This requires decomposing a task, grounding intention to tools, and using the results for further actions, relying on natural language reasoning and programming abilities (Section 3.2)
  - [Lemur: Harmonizing Natural Language and Code for Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/41ec0e510c31883f3b50a782651fb5b9-Paper-Conference.pdf)
- **Spatial understanding** (constructs)
  > In vision-language learning, how to enable spatial understanding in models is a fundamental research problem. Two desired capabilities stem from this problem: referring and grounding.
  - [Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)
- **Instruction following ability** (constructs)
  > Errors in grounding valid actions highlight a limitation in the model’s ability to follow instructions and format actions correctly (Section 4.3).
  - [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)
