# Abstract reasoning
**Type:** Construct  
**Referenced in:** 26 papers  
**Also known as:** Abstract thinking, High-level reasoning, Advanced abstract reasoning, Visual analogy solving  

## State of the Field

**Definition agreement:** Consensus. Most papers define abstract reasoning as the ability to operate on high-level concepts, rules, relations, or principles rather than concrete details, direct computation, or surface patterns, often with an emphasis on generalizing or inferring such principles from limited examples. A few papers express this through specific tasks like event abstraction, code synthesis, difficult math, or visual analogy, but these mostly function as settings or operationalizations of the same core capacity.

**Space of definitions.** Across papers, the prevailing usage treats abstract reasoning as a latent or cognitive ability to operate on concepts, principles, or high-level problem structure rather than concrete instances, direct computation, symbolic manipulation, or step-by-step low-level deduction. Papers variously describe it as reasoning about program properties at a conceptual level, using higher-level thoughts to guide problem solving, or distilling a problem to its conceptual structure by filtering irrelevant detail. Smaller lines of work define it more narrowly as identifying underlying patterns from a few examples and applying them to new cases, generalizing specific event mentions into higher-level abstractions, synthesizing concise abstract descriptions into implementation choices, handling non-routine mathematical problems, or completing visual analogies.

**Space of facets.** When papers systematize the construct, the clearest split is between abstraction and reasoning: one paper states that abstract reasoning involves abstraction, extracting common features from concrete entities, and reasoning, deriving new knowledge from existing information. Several authors use nearby labels, especially abstract thinking and high-level reasoning, for a similar emphasis on concepts, principles, global planning, and an overarching perspective; by contrast, some papers use the same name for narrower abilities such as visual analogy solving or advanced abstract reasoning in mathematics. A recurring contrast is with low-level or surface-level processing, including precise low-level reasoning, direct computation, symbolic manipulation, and attention to irrelevant detail.

**Space of measurement.** Papers link abstract reasoning to 3 measurement instruments and 3 behavioral indicators. The named instruments are ARC, ARC-AGI, and Bongard Problems: ARC is described as evaluating abstract reasoning through solving visual puzzles, Bongard Problems as visual puzzles that test pattern recognition and abstract reasoning, and ARC-AGI as a challenge exposing limitations in abstract reasoning abilities. The linked behavioral indicators include Image generation and Iterative refinement, plus 1 other indicator; overall, these operationalizations mostly instantiate the definitions that emphasize puzzles, patterns, or analogies, rather than the definitions centered on program properties, event abstraction, or high-level planning.

**Links.** One paper claims causal relationships from Code understanding and Symbolic reasoning to abstract reasoning, and another claims a causal relationship from abstract reasoning to Iterative refinement. Other papers relate abstract reasoning to Compositional generalization and General reasoning, including a reported discrepancy between general reasoning and abstract reasoning performances, plus 4 other linked constructs or behaviors. No correlational link is reported.

## Sources

**[Lemur: Integrating Large Language Models in Automated Program Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c86142265c5e2c900613dd1d031cb90-Paper-Conference.pdf)**
> The ability to reason about program properties and logic at a conceptual level, distinct from precise, step-by-step formal deduction.

**[ChartMimic: Evaluating LMM's Cross-Modal Reasoning Capability via Chart-to-Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/42806406dd99e30c3796bc98b2670fa2-Paper-Conference.pdf) (as "Abstract thinking")**
> The cognitive ability to work with concepts and principles independent of concrete instances, which is considered a prerequisite for demanding tasks like code generation.

**[Forest for the Trees: Overarching Prompting Evokes High-Level Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.66.pdf) (as "High-level reasoning")**
> The latent ability of a model to reason from abstract, conceptual representations of a problem rather than from low-level details, enabling more robust and semantically precise inference.

**[Towards Robust Mathematical Reasoning](https://aclanthology.org/2025.emnlp-main.1794.pdf) (as "Advanced abstract reasoning")**
> The capacity to handle difficult combinatorial or other non-routine mathematical problems that require deeper abstraction and problem solving.

**[VOILA: Evaluation of MLLMs For Perceptual Understanding and Analogical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf17e7346b6be4c2f2bb40de572e5bc-Paper-Conference.pdf) (as "Visual analogy solving")**
> Completing a visual analogy by inferring the missing image from a reference pair and an application pair.

## Relationships

### Abstract reasoning →
- **Iterative refinement** (behaviors tasks) — *causes*
  > We propose Instruct-of-Reflection (IoRT), a dynamic iterative reflection framework that integrates abstract reasoning into the reflection process, generating adaptive instruction to regulate the iterative reflection. (§ 7)
  - [Instruct-of-Reflection: Enhancing Large Language Models Iterative Reflection Capabilities via Dynamic-Meta Instruction](https://aclanthology.org/2025.naacl-long.502.pdf)
- **ARC-AGI** (measurements) — *measured_by*
  > The Abstraction and Reasoning Corpus (ARC-AGI) poses a significant challenge for large language models (LLMs), exposing limitations in their abstract reasoning abilities. (Abstract)
  - [Product of Experts with LLMs: Boosting Performance on ARC Is a Matter of Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/franzen25a/franzen25a.pdf)
- **Bongard Problems** (measurements) — *measured_by*
  > “These visual puzzles test cognitive abilities in pattern recognition and abstract reasoning”
  - [Bongard in Wonderland: Visual Puzzles that Still Make AI Go Mad?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wust25a/wust25a.pdf)
- **Abstraction and Reasoning Corpus** (measurements) — *measured_by*
  > "The Abstraction and Reasoning Corpus (ARC) aims to evaluate the abstract reasoning capabilities of language models through their ability to solve visual puzzles."
  - [The Surprising Effectiveness of Test-Time Training for Few-Shot Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/akyurek25a/akyurek25a.pdf)

### → Abstract reasoning
- **Code understanding** (constructs) — *causes*
  > This decomposition requires high-level reasoning that is difficult to automate using conventional formal methods, but plausibly could be performed by LLMs, with their documented code-understanding capability. (Section 2)
  - [Lemur: Integrating Large Language Models in Automated Program Verification](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c86142265c5e2c900613dd1d031cb90-Paper-Conference.pdf)
- **Symbolic reasoning** (constructs) — *causes*
  > These results point toward a resolution of the longstanding debate between symbolic and neural network approaches, suggesting that emergent reasoning in neural networks depends on the emergence of symbolic mechanisms. (Abstract)
  - [Emergent Symbolic Mechanisms Support Abstract Reasoning in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25c/yang25c.pdf)

### Associated with
- **General reasoning** (constructs)
  > Our findings reveal a substantial discrepancy between their general reasoning and abstract reasoning performances. (Abstract)
  - [Meaningful Learning: Enhancing Abstract Reasoning in Large Language Models via Generic Fact Guidance](https://proceedings.neurips.cc/paper_files/paper/2024/file/da5498f88193ff61f0daea1940b819da-Paper-Conference.pdf)
- **Geometric reasoning** (constructs)
  > Geometric ability is a significant challenge for large language models (LLMs) due to the need for advanced spatial comprehension and abstract thinking.
  - [Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > abstract reasoning involves two core processes: abstraction, the extraction of common features from concrete entities (Murphy, 2004), and reasoning, the derivation of new knowledge from existing information (Holyoak & Morrison, 2012).
  - [Benchmarking Abstract and Reasoning Abilities Through A Theoretical Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ma25u/ma25u.pdf)
