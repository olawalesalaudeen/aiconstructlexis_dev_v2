# Idea generation
**Type:** Behavior  
**Referenced in:** 13 papers  
**Also known as:** Brainstorming, Topic brainstorming, Feature proposal, Alternative uses generation, Research proposal generation, Interdisciplinary research generation  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is producing a set of ideas in response to a prompt or other provided context, often with novelty or diversity in view. Common formulations include generating ideas or suggestions for brainstorming, generating new topics related to given examples, and listing novel and appropriate uses for everyday objects; one definition also specifies fluency and relevance as the evaluation criteria. A smaller line of work uses the same behavior for more structured outputs, such as generating conceptual predictive features or full research proposals with elements like a title, motivation, proposed method, and experiment plan.

**Variants.** Papers study this behavior in several task forms: brainstorming within instruction-following, rapid collaborative brainstorming in multi-agent settings, topic brainstorming for argument mining, alternative uses generation in divergent thinking tasks, feature proposal for clinical trial prediction, and research proposal generation. Some variants are explicitly interdisciplinary, combining concepts and methods from distinct fields, and some are situated in closed-loop auto-research, where ideas are generated from previous experiments, feedback, and relevant papers.

**Space of elicitation and scores.** Only one measurement instrument is linked to this behavior: LLM-as-a-judge. The recorded use is idea evaluation, with a paper describing "LLM-as-a-Judge idea evaluation" to assess the quality of generated ideas.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not explicitly treat this behavior as evidence of a named construct.

## Sources

**[WangchanThaiInstruct: An instruction-following Dataset for Culture-Aware, Multitask, and Multi-domain Evaluation in Thai](https://aclanthology.org/2025.emnlp-main.175.pdf) (as "Brainstorming")**
> Generating a list of ideas or suggestions in response to a prompt, evaluated for fluency and relevance.

**[Exploring Quality and Diversity in Synthetic Data Generation for Argument Mining](https://aclanthology.org/2025.emnlp-main.1351.pdf) (as "Topic brainstorming")**
> The task of generating a diverse set of new topics, thematically related to a given set of examples, to serve as the basis for creating novel argumentative texts.

**[Creativity in LLM-based Multi-Agent Systems: A Survey](https://aclanthology.org/2025.emnlp-main.1403.pdf)**
> The observable process of producing novel concepts or solutions, often through brainstorming or divergent thinking in multi-agent settings.

**[AutoCT: Automating Interpretable Clinical Trial Prediction with LLM Agents](https://aclanthology.org/2025.emnlp-main.1575.pdf) (as "Feature proposal")**
> The observable process by which LLM agents generate conceptual ideas for predictive features based on task descriptions and sample data.

**[MuseScorer: Idea Originality Scoring At Scale](https://aclanthology.org/2025.emnlp-main.1009.pdf) (as "Alternative uses generation")**
> The task of listing as many novel and appropriate uses as possible for a common, everyday object.

**[All That Glitters is Not Novel: Plagiarism in AI Generated Research](https://aclanthology.org/2025.acl-long.1249.pdf) (as "Research proposal generation")**
> Producing structured research documents that include a title, problem statement, motivation, proposed method, experiment plan, and other components typical of academic proposals.

**[ResearchTown: Simulator of Human Research Community](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25i/yu25i.pdf) (as "Interdisciplinary research generation")**
> The creation of research proposals that integrate concepts and methods from distinct scientific fields, such as NLP and astronomy or criminology.

## Relationships

### Idea generation →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > LLM-as-a-Judge idea evaluation (Table 4) evidences higher quality ideas when generations are grounded with MIR (Section 6.4)
  - [MIR: Methodology Inspiration Retrieval for Scientific Research Problems](https://aclanthology.org/2025.acl-long.1390.pdf)
