# Creativity
**Type:** Construct  
**Referenced in:** 53 papers  
**Also known as:** Creative thinking, Creative problem-solving, Creative intelligence, Creative reasoning, Creative quality  

## State of the Field

**Definition agreement:** Consensus. Most papers define creativity as the ability of a model or its outputs to produce novel, original, or unconventional ideas, content, tasks, or solutions, often also requiring coherence, appropriateness, or value; the differences are mainly domain, setting, or emphasis. A few papers broaden it toward adaptive problem solving or a general cognitive trait, but the dominant usage is the same core phenomenon of novelty and originality in generated outputs or solutions.

**Space of definitions.** Across the surveyed work, the prevailing usage treats creativity as a model ability or capacity for generating novel, original, diverse, imaginative, or unconventional content, ideas, artifacts, tasks, or solutions. Many definitions also attach a fit condition, describing outputs as coherent, valuable, contextually appropriate, or aligned with user intent rather than merely new. A smaller line of work narrows the construct to constrained text composition, non-obvious problem solving, or adaptive reasoning in unfamiliar environments, while another minority treats creativity as a property of outputs or their judged quality, such as novelty relative to standard responses or ratings of cleverness, remoteness, and uncommonness.

**Space of facets.** One paper breaks creativity into convergent thinking, defined as purposefulness toward a goal, and divergent thinking, defined as adaptability to explore new environments or constraints. Another paper treats creativity scoring as having two complementary dimensions, the intrinsic qualities of ideas, such as flexibility or diversity, and their extrinsic statistical infrequency, and related human judgments are described through uncommonness, remoteness, and cleverness. Papers also use nearby labels for narrower or broader constructs, including creative thinking, creative problem-solving, creative reasoning, creative intelligence, and creative quality, and one paper contrasts creative reasoning with analytical intelligence assessed through problem-solving.

**Space of measurement.** Papers link creativity to 4 measurement instruments and 2 behavioral indicators. The most frequently linked instruments are LLM-as-a-judge, used for side-by-side comparisons or grading outputs on creativity alongside other dimensions, the Consensual Assessment Technique, which asks domain experts for holistic judgments of creative products, human evaluation by trained raters, and WildBench, a benchmark described as using challenging real-user tasks that require creativity. Operationalizations also include the behavioral indicator creative writing, such as open-ended poem writing, so many measurements are output-centered even when many definitions describe a broader ability.

**Links.** Papers link creativity to 10 constructs and 2 behavioral indicators. Divergent thinking is the most recurrent neighbor: some papers describe creativity as related to it, and one paper claims a causal relationship from divergent thinking to creativity. Other papers relate creativity to associative reasoning and coherence, with coherence framed as a trade-off in one study, and claim causal relationships from domain knowledge and emotional intelligence to creativity; other constructs and behavioral indicators are also linked, and no papers report correlational links.

## Sources

**[GenSim: Generating Robotic Simulation Tasks via Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/143ea4a156ef64f32d4d905206cf32e1-Paper-Conference.pdf)**
> The latent ability of an LLM to generate novel, diverse, and previously unseen robotic tasks that go beyond the scope of existing human-curated benchmarks.

**[THOUGHT PROPAGATION: AN ANALOGICAL APPROACH TO COMPLEX REASONING WITH LARGE LANGUAGE MODELS](https://proceedings.iclr.cc/paper_files/paper/2024/file/2dae7d1ccf1edf76f8ce7c282bdf4730-Paper-Conference.pdf) (as "Creative thinking")**
> The ability to generate coherent, novel text under constraints that require imaginative planning and composition.

**[LLMs Are Not Intelligent Thinkers: Introducing Mathematical Topic Tree Benchmark for Comprehensive Evaluation of LLMs](https://aclanthology.org/2025.naacl-long.161.pdf) (as "Creative problem-solving")**
> The ability to solve complex problems that require novel, intelligent, or non-obvious steps, rather than just following a straightforward procedure.

**[EscapeBench: Towards Advancing Creative Intelligence of Language Model Agents](https://aclanthology.org/2025.acl-long.39.pdf) (as "Creative intelligence")**
> A broad latent trait encompassing the capacity to think innovatively, adapt observations to new contexts, and generate original strategies in unstructured scenarios, as part of a triarchic model of intelligence.

**[EscapeBench: Towards Advancing Creative Intelligence of Language Model Agents](https://aclanthology.org/2025.acl-long.39.pdf) (as "Creative reasoning")**
> The latent ability of a language model agent to generate novel, adaptive solutions to problems by repurposing tools, identifying implicit goals, and solving puzzles in unfamiliar environments.

**[MuseScorer: Idea Originality Scoring At Scale](https://aclanthology.org/2025.emnlp-main.1009.pdf) (as "Creative quality")**
> A latent trait reflecting the overall perceived creativity of an idea, as judged by human raters on dimensions such as cleverness, remoteness, and uncommonness.

## Relationships

### Creativity →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > we do LLM-based grading of samples before and after self-correction in terms of clarity, grammaticality, factuality, writing style, and creativity. (Sec. 5.4)
  - [Generalized Interpolating Discrete Diffusion](https://raw.githubusercontent.com/mlresearch/v267/main/assets/von-rutte25a/von-rutte25a.pdf)
- **WildBench** (measurements) — *measured_by*
  > These tasks often require critical thinking, creativity, and technical expertise, making WILDBENCH substantially more challenging than AlpacaEval... (Section 1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Consensual Assessment Technique** (measurements) — *measured_by*
  > The Consensual Assessment Technique (CAT) (Amabile, 1983) is a method for evaluating creative products by asking experts in the domain to provide their own holistic judgments of creativity, without being given explicit criteria to follow.
  - [Can Large Language Models Outperform Non-Experts in Poetry Evaluation? A Comparative Study Using the Consensual Assessment Technique](https://aclanthology.org/2025.emnlp-main.1625.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Following the evaluation criteria detailed in Section 4.3, we engaged a team of professionally trained evaluators to assess the generated greetings across five dimensions: language quality, creativity, emotional resonance, cultural appropriateness, and content richness.
  - [Igniting Creative Writing in Small Language Models: LLM-as-a-Judge versus Multi-Agent Refined Rewards](https://aclanthology.org/2025.emnlp-main.868.pdf)

### → Creativity
- **Bias amplification** (behaviors tasks) — *causes*
  > Conversely, amplifying bias also negatively influences the system in several ways. Besides the cases where the bias is malicious (it can be solved by designing an appropriate interaction phase where hbad /∈ Heff), it also influences the model’s creativity. (Section 3.3)
  - [Bias Amplification in Language Model Evolution: An Iterated Learning Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/4418f6a54f4314202688d77956e731ce-Paper-Conference.pdf)
- **Visual perception** (constructs) — *causes*
  > the weak perception of LVLMs inhibits authentic strengths in reasoning and creation. (Abstract).
  - [ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Domain knowledge** (constructs) — *causes*
  > By analyzing these enhanced creation cases with perfect reasoning information, we found that some reasoning tasks involving Professional Knowledge influence the next creation tasks. (Section 5.1).
  - [ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Emotional intelligence** (constructs) — *causes*
  > Some reasoning tasks needing Emotional Intelligence influence the relative creation tasks. (Section 5.1).
  - [ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Divergent thinking** (constructs)
  > The DAT is a classic creativity test in which testee write 10 unrelated words, and words with greater “distances” in their context embeddings indicate more divergent thinking. (Section 3.3)
  - [Innovative Thinking, Infinite Humor: Humor Research of Large Language Models through Structured Thought Leaps](https://proceedings.iclr.cc/paper_files/paper/2025/file/6794f555524c9069e26970a408d353cc-Paper-Conference.pdf)
- **Creative writing** (behaviors tasks)
  > For Creative Writing, SaMer assigns the greatest importance to the creativity dimension, followed sequentially by logic, relevance, harmlessness, and style, which aligns closely with the essential attributes of creative writing.
  - [SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf)
- **Generation diversity** (constructs)
  > hindering the exploration of novel and diverse ideas — a cornerstone of creativity.
  - [Diversity-Rewarded CFG Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a59a11e8580a7ac850cb792f6179c7a0-Paper-Conference.pdf)
- **Coherence** (constructs)
  > A central challenge is managing the trade-off between creativity and coherence, which is influenced by the sampling strategy during text generation. (Section 1)
  - [Turning Up the Heat: Min-p Sampling for Creative and Coherent LLM Outputs](https://proceedings.iclr.cc/paper_files/paper/2025/file/afa5f124e36bed5cc2125067005d43f5-Paper-Conference.pdf)
- **Associative reasoning** (constructs)
  > A key aspect of evaluating creativity lies in assessing associative ability, which plays a central role in creativity by driving generative processes (Section 1).
  - [AssoCiAm: A Benchmark for Evaluating Association Thinking while Circumventing Ambiguity](https://aclanthology.org/2025.emnlp-main.263.pdf)
- **Originality** (constructs)
  > we attempt to break down visual advertisement creativity into atypicality and originality.
  - [Leveraging Large Models to Evaluate Novel Content: A Case Study on Advertisement Creativity](https://aclanthology.org/2025.emnlp-main.1072.pdf)
- **Imagination** (constructs)
  > Some reasoning tasks containing Imagination like “Tangram Speculation” may influence the corresponding creative task (“Tangram Segmentation”). (Section 5.1).
  - [ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf)
