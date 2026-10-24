# Story generation
**Type:** Behavior  
**Referenced in:** 26 papers  
**Also known as:** Story writing, Narrative generation, Constrained story generation, Keyword-based story generation, Personalized story generation, Short story generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats story generation as prompt-based production of a narrative text or story. Many definitions use broad labels such as story generation, story writing, or narrative generation, while a smaller line of work narrows the behavior to coherent short stories, story continuations from a first sentence, or outputs that remain plausible while following prompt requirements. Some formulations also count scene descriptions and character actions as part of the behavior when they form a narrative.

**Variants.** Papers study several variants, including constrained story generation, keyword-based story generation, personalized story generation, short story generation, and narrative generation in long-form writing. The task can involve increasing numbers of explicit constraints, required keywords at arbitrary positions, including the middle or end of a sequence, sociocultural personalization factors such as gender or nationality, specified characters and plot elements, or open-ended continuation from an initial sentence. Another strand uses narrative generation for real-time game scenes and character responses.

**Space of elicitation and scores.** Story generation is linked to two measurement instruments, StoryCloze and WritingPrompts, and both are used as datasets. StoryCloze is described as short stories with valid and invalid endings, and one paper adapts it for open-ended generation by asking for a short story from only the first sentence of a scenario; WritingPrompts is described as a story-generation dataset used for story-telling fine-tuning.

**What it is taken as evidence of.** No construct is linked to story generation. The only recorded non-instrument link is to one behavioral indicator: one paper uses story generation as one of the tasks by which Instruction following is measured, alongside paraphrase, simplify, and summarize.

## Sources

**[First-Person Fairness in Chatbots](https://proceedings.iclr.cc/paper_files/paper/2025/file/92af0c8c2664429de2bb44c2692d84ae-Paper-Conference.pdf) (as "Story writing")**
> The specific task of generating a narrative or story in response to a user prompt.

**[Unbounded: A Generative Infinite Game of Character Life Simulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/da2411768acb844b255bb6770e5a71c7-Paper-Conference.pdf) (as "Narrative generation")**
> The observable act of producing descriptive text that forms a story, describes a scene, or narrates a character's actions.

**[Agents' Room:  Narrative Generation through Multi-step Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fbc8a83d93dd8021a4dd8d2d34138eb-Paper-Conference.pdf)**
> The general task of creating a narrative text from a prompt.

**[Does quantization affect models' performance on long-context tasks?](https://aclanthology.org/2025.emnlp-main.479.pdf) (as "Constrained story generation")**
> The observable task of generating a coherent short story that adheres to an increasing number of specific constraints provided in the prompt.

**[Conditional [MASK] Discrete Diffusion Language Model](https://aclanthology.org/2025.emnlp-main.450.pdf) (as "Keyword-based story generation")**
> Generating coherent narratives that incorporate specified keywords at arbitrary positions in the sequence.

**[Biased Tales: Cultural and Topic Bias in Generating Children's Stories](https://aclanthology.org/2025.emnlp-main.3.pdf) (as "Personalized story generation")**
> The task of generating a narrative tailored to specific user-provided factors, such as a child's gender, nationality, or ethnicity.

**[Quality-Diversity through AI Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/5b9bef4eae0f574cedbf9f4bf29d8ae7-Paper-Conference.pdf) (as "Short story generation")**
> Creating brief narrative texts involving specified characters and plot elements, with variation in genre and story outcome.

## Relationships

### Story generation →
- **StoryCloze** (measurements) — *measured_by*
  > For our story generation task, we use the StoryCloze (Mostafazadeh et al., 2017) dataset, which was originally used for story understanding, and consists of short stories each with a valid ending sentence as well as an invalid ending. (Section 3)
  - [Forking Paths in Neural Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/2b6a8ca3d06ffa2e044bff8c723863ff-Paper-Conference.pdf)
- **WritingPrompts** (measurements) — *measured_by*
  > "(II) Story-telling: We also fine-tune LLaMa2 on the story-generation dataset WritingPrompts"
  - [Copyright-Protected Language Generation via Adaptive Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/01953220e4becc6ac1078c24c1f8d3a7-Paper-Conference.pdf)
- **TinyStories** (measurements) — *measured_by*
  > In Section 4.2, we first train a model based on ARDTs and test its ability to continue stories on Tinystories Eldan & Li (2023)... (Section 4.2)
  - [On the Power of Decision Trees in Auto-Regressive Language Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/72176f95680c3fb27a0966f36d5d0c53-Paper-Conference.pdf)

### Associated with
- **Instruction following** (behaviors tasks)
  > Instruction Following: four tasks to paraphrase, simplify, summarize, or generate stories
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
