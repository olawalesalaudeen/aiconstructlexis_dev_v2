# Cognition
**Type:** Construct  
**Referenced in:** 12 papers  
**Also known as:** Cognitive capability, Cognitive capacity, Cognitive ability  

## State of the Field

**Definition agreement:** Complementary. Most papers define cognition as a system's latent or general capacity for understanding, integrating perception or knowledge, and carrying out reasoning. A few define it more narrowly as understanding actions and consequences in an environment or as an unobservable upper bound on reasoning ability, but these are compatible scopes or facets of the same system-level capacity rather than different constructs.

**Space of definitions.** One recurring framing treats cognition as a latent or general mental capacity that brings together perception, knowledge, and reasoning, sometimes specifically to deduce more complex answers from images. In this usage, papers describe it as integrating perceptual information with domain-specific knowledge, or as a broader capacity encompassing knowledge, perception, and reasoning. Other papers use different framings, describing cognition as the capacity to understand actions and their consequences in an environment, or as an inherent, unobservable limit on comprehending and executing complex reasoning steps. The main disagreement is whether cognition names a broad integrative mental ability, a system's understanding of action consequences, or a ceiling on reasoning capacity.

**Space of facets.** Papers often unpack cognition into perception, knowledge, and reasoning, and one paper explicitly describes a cognition component that requires reasoning about images. They also position it differently relative to neighboring constructs: some separate perception and cognition while still defining cognition through the integration of perceptual attributes with knowledge, and one paper treats cognitive abilities as the foundation of associative ability. Nearby labels are not used in the same way, because "cognitive capability" denotes the broad bundle of knowledge, perception, and reasoning, whereas "cognitive capacity" denotes an unobservable limit and differing cognitive trajectories across model sizes.

**Space of measurement.** Papers operationalize cognition with 2 measurement instruments and no behavioral indicators, using the MME benchmark and MMMU. MME is described as measuring both perception and cognition across 14 subtasks, while MMMU scores are used as an indicator of cognitive ability because the benchmark is described as evaluating comprehensive cognitive skills of MLLMs. These operationalizations are benchmark-based and line up most directly with the definitions that foreground perception and reasoning, rather than the definitions that foreground action interpretation or an inherent capacity limit.

**Links.** No causal relationship is recorded. Papers connect cognition to 4 constructs: it is reported to correlate with reasoning, associative reasoning is reported to correlate with cognition, and cognition is related to visual perception and fine-grained visual understanding. In the correlational links, one paper says that more complex chains of thought in larger models suggest higher reasoning and cognitive capacities, and another reports a strong positive correlation between cognition and association.

## Sources

**[Micro-Bench: A Microscopy Benchmark for Vision-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/36b31e1bb8ecd4f4081686448e9eff2d-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The latent ability to integrate perceptual information with domain-specific knowledge to deduce more complex answers and reason about an image.

**[AssoCiAm: A Benchmark for Evaluating Association Thinking while Circumventing Ambiguity](https://aclanthology.org/2025.emnlp-main.263.pdf) (as "Cognitive capability")**
> A general mental capacity encompassing knowledge, perception, and reasoning, which is theorized to be foundational to associative ability.

**[Enhancing Reasoning Abilities of Small LLMs with Cognitive Alignment](https://aclanthology.org/2025.emnlp-main.377.pdf) (as "Cognitive capacity")**
> The inherent, unobservable limit on a model's ability to comprehend and execute complex reasoning steps, which often correlates with its parameter size.

## Relationships

### Cognition →
- **MME** (measurements) — *measured_by*
  > MME benchmark measures both perception and cognition abilities on a total of 14 subtasks. (Section 4.2)
  - [Fine-tuning Multimodal LLMs to Follow Zero-shot Demonstrative Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/8cb5b08f912600de3de07c6503599ba8-Paper-Conference.pdf)
- **MMMU** (measurements) — *measured_by*
  > we use scores from the MMMU benchmark (Yue et al., 2024) as an indicator of models’ cognitive ability, as MMMU is specifically designed to evaluate comprehensive cognitive skills of MLLMs. (Section 6)
  - [AssoCiAm: A Benchmark for Evaluating Association Thinking while Circumventing Ambiguity](https://aclanthology.org/2025.emnlp-main.263.pdf)

### → Cognition
- **Associative reasoning** (constructs) — *correlates*
  > As shown in Fig. 3, all Pearson Correlation Coefficient values exceed 0.66, with three exceed 0.71, demonstrating a strong positive correlation between cognition and association. (Section 6)
  - [AssoCiAm: A Benchmark for Evaluating Association Thinking while Circumventing Ambiguity](https://aclanthology.org/2025.emnlp-main.263.pdf)

### Associated with
- **Visual perception** (constructs)
  > cognition capabilities (integrating perceptual attributes and knowledge to deduce more complex answers) (Section 1).
  - [Micro-Bench: A Microscopy Benchmark for Vision-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/36b31e1bb8ecd4f4081686448e9eff2d-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Fine-grained visual understanding** (constructs)
  > While recent MLLMs show promising results in basic perception, they still struggle to perceive fine-grained details (Tong et al., 2024b), which is essential for understanding cognition and emotion.
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
