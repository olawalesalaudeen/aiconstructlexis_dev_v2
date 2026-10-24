# Creative writing
**Type:** Behavior  
**Referenced in:** 39 papers  
**Also known as:** Content creation, Story continuation, Sonnet writing, Ancient prose writing, Poetry writing, Ci writing, Qu writing, Couplet writing, Text creation, Storytelling, Poem writing, Poem generation, Poetry composition, Novel writing, Creative story generation, Creative composition, Long-form Narrative Generation, Story completion  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats creative writing as open-ended generation of novel, imaginative, or original text from a prompt, commonly stories, poems, blog posts, scripts, or other authored text. A smaller line of work narrows the behavior to continuing or completing a narrative, either by generating the next words or ending of a story, or by selecting the most plausible continuation from options. Some formulations add explicit success criteria, such as coherence, diversity, or adherence to prompt constraints on style, tone, rhyme, content, or required words.

**Variants.** Papers use several labels and settings for this behavior, including content creation, story continuation or completion, poem and sonnet writing, long-form narrative generation, and creative composition. Specialized variants include collaborative poem generation, creative writing from audio prompts, open-ended story writing from writing prompts, knowledge-intensive story writing that incorporates trivia answers, and classical Chinese prose and verse forms. One paper also reports that creative writing is related to text generation and forecasting.

**Space of elicitation and scores.** Papers link creative writing to 5 measurement instruments, all as measured_by relations. The most recurrent named instrument is TinyStories, followed by AlpacaEval 2.0, BookMIA, HellaSwag, and WildBench. They elicit the behavior through story continuation, open-ended preference prompts, book snippets, multiple-choice plausible continuations, or tasks with multiple constraints on style and content.

**What it is taken as evidence of.** Only 1 construct is linked to this behavior, Creativity. The papers connect the two in two recorded ways: one reports that creative writing is related to Creativity and weights creativity most heavily in its assessment of the task, while another treats Creativity as measured by poem writing. No other construct is linked in the papers.

## Sources

**[Condor: Enhance LLM Alignment with Knowledge-Driven Data Synthesis and Refinement](https://aclanthology.org/2025.acl-long.1091.pdf)**
> Generating novel and imaginative text, such as stories, blog posts, or scripts, based on a given prompt.

**[Stepwise Alignment for Constrained Language Model Policy Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/bcfcf7232cb74e1ef82d751880ff835b-Paper-Conference.pdf) (as "Content creation")**
> Generating creative or original written content such as stories or other authored text.

**[On the Power of Decision Trees in Auto-Regressive Language Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/72176f95680c3fb27a0966f36d5d0c53-Paper-Conference.pdf) (as "Story continuation")**
> Generating the next words of a story from a short story beginning so that the output extends the narrative.

**[Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf) (as "Sonnet writing")**
> Generating a poem following a strict rhyme scheme and incorporating specific provided words.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Ancient prose writing")**
> Composing original prose in classical Chinese in response to a prompt or scenario.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Poetry writing")**
> Composing an ancient-style poem based on a specified theme and form.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Ci writing")**
> Composing a ci poem according to a specified theme and tune pattern.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Qu writing")**
> Composing a qu poem according to a specified theme and tune pattern.

**[WenMind: A Comprehensive Benchmark for Evaluating Large Language Models in Chinese Classical Literature and Language Arts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c1019b5711474ae5627dc8580614e01-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Couplet writing")**
> Composing a complete couplet for a specified theme or occasion.

**[Learning LLM-as-a-Judge for Preference Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/09fd990b19b2e69cc4d20e9969e43f09-Paper-Conference.pdf) (as "Text creation")**
> The task of generating creative text, such as writing poetry or crafting headlines.

**[SWIFT: On-the-Fly Self-Speculative Decoding for LLM Inference Acceleration](https://proceedings.iclr.cc/paper_files/paper/2025/file/d74d002a9154b4cc433a234feb27c5f4-Paper-Conference.pdf) (as "Storytelling")**
> The task of generating a narrative or story from a given prompt or context.

**[Progressive Mixed-Precision Decoding for Efficient LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df4313ecd4875931fbdacc486cc1fcf-Paper-Conference.pdf) (as "Poem writing")**
> The task of generating a poem based on a given prompt or theme.

**[3D-Properties: Identifying Challenges in DPO and Charting a Path Forward](https://proceedings.iclr.cc/paper_files/paper/2025/file/c080f9fb3658511bc4f063c5794ef706-Paper-Conference.pdf) (as "Poem generation")**
> The task of creating poetry that adheres to specific constraints on format, rhyme, rhythm, and tone as specified in the prompt.

**[AI as Humanity’s Salieri: Quantifying Linguistic Creativity of Language Models via Systematic Attribution of Machine Text against Web Text](https://proceedings.iclr.cc/paper_files/paper/2025/file/e304d374c85e385eb217ed4a025b6b63-Paper-Conference.pdf) (as "Poetry composition")**
> The task of generating poems, often based on a prompt or an initial line from an existing poem.

**[AI as Humanity’s Salieri: Quantifying Linguistic Creativity of Language Models via Systematic Attribution of Machine Text against Web Text](https://proceedings.iclr.cc/paper_files/paper/2025/file/e304d374c85e385eb217ed4a025b6b63-Paper-Conference.pdf) (as "Novel writing")**
> The task of generating paragraphs of a novel, often initiated with a starting sentence from an existing human-written work.

**[Improving Diversity in Language Models: When Temperature Fails, Change the Loss](https://raw.githubusercontent.com/mlresearch/v267/main/assets/verine25a/verine25a.pdf) (as "Creative story generation")**
> Generating diverse and engaging stories from prompts in an open-ended setting.

**[Position: Societal Impacts Research Requires Benchmarks for Creative Composition Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25r/shen25r.pdf) (as "Creative composition")**
> The observable behavior of performing a generation task that requires the production of a novel artifact given a set of defined constraints.

**[Agents' Room:  Narrative Generation through Multi-step Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fbc8a83d93dd8021a4dd8d2d34138eb-Paper-Conference.pdf) (as "Long-form Narrative Generation")**
> The observable action of producing continuous fiction text of 1,000-2,000 tokens from a writing prompt.

**[Measuring Diversity in Synthetic Datasets](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25ac/zhu25ac.pdf) (as "Story completion")**
> A generative language task where the model produces a continuation or ending for a given narrative prompt, used as one of the tasks for evaluating synthetic dataset diversity.

## Relationships

### Creative writing →
- **WildBench** (measurements) — *measured_by*
  > “The tasks in WILDBENCH typically demand higher-order reasoning, such as ... creative writing with multiple constraints on the style and content”
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > To test our hypothesis, we break down the prompts in Alpaca Eval 2.0 (Li et al., 2023) into different categories. ... and the other two tasks are tasks that require modeling human open-ended preference: Creative writing and making personal recommendations (Recommendation).
  - [SIMPLEMIX: Frustratingly Simple Mixing of Off- and On-policy Data in Language Model Preference Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25au/li25au.pdf)

### Associated with
- **Creativity** (constructs)
  > For Creative Writing, SaMer assigns the greatest importance to the creativity dimension, followed sequentially by logic, relevance, harmlessness, and style, which aligns closely with the essential attributes of creative writing.
  - [SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > Creative composition encompasses generation tasks that require everyday creativity for personal goals... brainstorming solutions to personal problems requires inventive and harmless advice. (Section 1)
  - [Position: Societal Impacts Research Requires Benchmarks for Creative Composition Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25r/shen25r.pdf)
