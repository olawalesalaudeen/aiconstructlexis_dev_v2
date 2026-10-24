# Analogical reasoning
**Type:** Construct  
**Referenced in:** 20 papers  
**Also known as:** Analogy-making  

## State of the Field

**Definition agreement:** Consensus. Most papers define analogical reasoning as the ability to recognize abstract or structural relations across a source and target and then apply or transfer that relational pattern to solve a new problem. The remaining papers use the same core idea in narrower settings such as visual domains, past exemplars, or cultural concepts, so the differences are only in context and emphasis rather than in what the construct is.

**Space of definitions.** Across the surveyed work, the prevailing framing is a higher-order or latent ability to recognize structural correspondences, abstract relations, or relational patterns, and to map or transfer them from a source, reference pair, or past problem to a new domain or novel problem. Many definitions use closely aligned language of applying abstract relational structures or previously learned relations to new concepts. A smaller line of work phrases the construct as analogy-making, or defines it more specifically as a model drawing on recalled or self-generated analogous exemplars, and some papers specialize it to visual domains or cultural concepts rather than leaving it domain-general.

**Space of facets.** When papers decompose the construct, they describe it as involving perceptual understanding, mapping abstract relationships between visual contents, and transferring relational patterns to novel cases. Some authors place it alongside deductive, inductive, and abductive reasoning as one logical reasoning type, while others use analogy-making as near-equivalent language for the same process. Related descriptions also position it near relational reasoning, abstract reasoning, and fluid intelligence.

**Space of measurement.** Papers link it to 2 measurement instruments, both benchmarks: ARC-Challenge and DRISHTIKON. ARC-Challenge is described as a 4-choice format that centers on analogical and inductive reasoning, while DRISHTIKON operationalizes it with Analogy questions framed as cultural pattern-matching, such as relating dishes or art forms across states. Papers also link it to 1 behavioral indicator, Complex reasoning question answering, but as a claimed effect rather than a direct measure; no linked human evaluation, LLM-as-a-judge, or probe or analysis instrument appears.

**Links.** The reported links appear in individual papers rather than repeated across many papers. One paper claims a causal relationship from analogical reasoning to Complex reasoning question answering, and another claims a causal relationship from analogical reasoning to Spatial reasoning through enhanced global scene understanding. Other papers report it is related to Fluid intelligence and In-context learning, and also place it near other logical, relational, and visual-perception constructs.

## Sources

**[VOILA: Evaluation of MLLMs For Perceptual Understanding and Analogical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf17e7346b6be4c2f2bb40de572e5bc-Paper-Conference.pdf)**
> The cognitive ability to identify, map, and transfer relational patterns from a known domain (a reference pair) to a new one (an application pair).

**[Reasoning Limitations of Multimodal Large Language Models. A case study of Bongard Problems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/malkinski25a/malkinski25a.pdf) (as "Analogy-making")**
> The cognitive process of identifying and applying structural correspondences between different situations or representations.

## Relationships

### Analogical reasoning →
- **Spatial reasoning** (constructs) — *causes*
  > By leveraging text-based analogical reasoning, the agent enhances its global scene understanding and spatial reasoning, leading to more accurate action decisions.
  - [Vision-and-Language Navigation with Analogical Textual Descriptions in LLMs](https://aclanthology.org/2025.emnlp-main.759.pdf)
- **DRISHTIKON** (measurements) — *measured_by*
  > “These were augmented into three reasoning categories: Common Sense Cultural... and Analogy, framing cultural pattern-matching”
  - [DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models' Understanding on Indian Culture](https://aclanthology.org/2025.emnlp-main.68.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > “ARC-Challenge (Clark et al., 2018) which uses a 4-choice format” and “ARC-Challenge centers on Analogical and Inductive Reasoning”
  - [Benchmark Profiling: Mechanistic Diagnosis of LLM Benchmarks](https://aclanthology.org/2025.emnlp-main.789.pdf)
- **Complex reasoning** (constructs) — *causes*
  > we advance the traditional analogical reasoning and propose a novel Thought Propagation (TP) framework to amend existing reasoning-from-scratch methods and enhance the complex reasoning ability of LLMs.
  - [THOUGHT PROPAGATION: AN ANALOGICAL APPROACH TO COMPLEX REASONING WITH LARGE LANGUAGE MODELS](https://proceedings.iclr.cc/paper_files/paper/2024/file/2dae7d1ccf1edf76f8ce7c282bdf4730-Paper-Conference.pdf)

### → Analogical reasoning
- **Prompt engineering** (behaviors tasks) — *causes*
  > CoT proved most beneficial for reasoning-intensive categories such as multi-hop and analogy questions, yielding accuracy gains of up to 10–15%... (Section 5.6)
  - [DRISHTIKON: A Multimodal Multilingual Benchmark for Testing Language Models' Understanding on Indian Culture](https://aclanthology.org/2025.emnlp-main.68.pdf)

### Associated with
- **In-context learning** (constructs)
  > "Explicitly prompting them to recall relevant problems and solutions in the context guides LLMs to perform in-context learning to solve new problems."
  - [Large Language Models as Analogical Reasoners](https://proceedings.iclr.cc/paper_files/paper/2024/file/4990dad2c1696224de42573d0222554a-Paper-Conference.pdf)
- **Visual perception** (constructs)
  > Analogical reasoning consists of diverse atomic abilities; perceptual understanding, mapping abstract relationships between visual contents (Gentner, 1983), and transferring relational patterns to novel cases. (Section 1)
  - [VOILA: Evaluation of MLLMs For Perceptual Understanding and Analogical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf17e7346b6be4c2f2bb40de572e5bc-Paper-Conference.pdf)
- **Logical reasoning** (constructs)
  > In this paper, we focus on four logical reasoning types: deductive, inductive, abductive, and analogical reasoning defined in (Nunes, 2012). (Section 3)
  - [TypedThinker: Diversify Large Language Model Reasoning with Typed Thinking](https://proceedings.iclr.cc/paper_files/paper/2025/file/494ad6d9b36d9a1528dbf3baeb4e8a72-Paper-Conference.pdf)
- **Fluid intelligence** (constructs)
  > Analogy-making is a critical aspect of human cognition, tightly linked with fluid intelligence, the capacity to apply learned skills in novel settings (Lake et al., 2017). (Section 1)
  - [Reasoning Limitations of Multimodal Large Language Models. A case study of Bongard Problems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/malkinski25a/malkinski25a.pdf)
- **Image generation** (behaviors tasks)
  > "The aim is to generate an image that completes the analogy problem following perceptual and relational reasoning."
  - [VOILA: Evaluation of MLLMs For Perceptual Understanding and Analogical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf17e7346b6be4c2f2bb40de572e5bc-Paper-Conference.pdf)
