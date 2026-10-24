# MGSM
**Type:** Measurement  
**Referenced in:** 38 papers  

## State of the Field

**What it is.** Across the surveyed work, MGSM is most commonly described as a multilingual grade-school math benchmark or dataset of word problems, used to evaluate mathematical or arithmetic reasoning across languages. Several papers further describe it as extending or translating GSM8K into multiple languages, but the reported coverage differs: some definitions mention 10 languages, others 11 languages, and another refers to nine non-English languages; one relationship statement specifies 250 manually translated GSM8K test problems, and another paper describes 250 QA pairs. A smaller line of work treats it as the source for AfriMGSM, while other papers mention related resources such as MGSM-SYMBOLIC and MGSM8KInstruct, and one definition says evaluation is done with exact match.

**What it is claimed to measure.** Papers use MGSM to measure five constructs and one behavioral indicator. The prevailing usage is to measure Mathematical reasoning, and papers also report using it for Multilingual reasoning, Reasoning, Generalization, and the behavioral indicator Mathematical problem solving, plus one other construct. Overall, the linked claims concentrate on reasoning-oriented constructs rather than a single broader ability.

**Space of uses.** Papers usually place MGSM inside broader multilingual evaluation suites rather than using it alone, alongside XQuAD, MSVAMP, XCOPA, TyDiQA, and XStoryCloze. In those settings it is positioned as the math or reasoning component, for example as one of several datasets for general understanding and reasoning capabilities, as one of six benchmarks spanning reasoning, understanding, and generation, or as one of two multilingual benchmarks for reading comprehension and maths reasoning. Some authors report using the whole test set, and one paper says MGSM evaluation uses MGSM8KInstruct as a training set.

**Concerns raised.** Some papers note scope limitations. One says MGSM prioritizes multilingual coverage through translated or templated questions but restricts evaluation to narrow reasoning formats such as math problems, and another characterizes it as a structured math reasoning task where predefined logic may suffice when using it to test generalization.

## Sources

**[AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors](https://proceedings.iclr.cc/paper_files/paper/2024/file/578e65cdee35d00c708d4c64bce32971-Paper-Conference.pdf)**
> Multilingual Grade School Math benchmark evaluating mathematical reasoning across languages, used to test non-English quantitative reasoning ability.

## Relationships

### → MGSM
- **Mathematical reasoning** (constructs) — *measured_by*
  > We experimented MindMerger with the latest multilingual mathematical reasoning MGSM [Shi et al., 2023] and MSVAMP [Chen et al., 2023] (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **Multilingual reasoning** (constructs) — *measured_by*
  > We experimented MindMerger with the latest multilingual mathematical reasoning MGSM [Shi et al., 2023] (Section 4.2)
  - [MindMerger: Efficiently Boosting LLM Reasoning in non-English Languages](https://proceedings.neurips.cc/paper_files/paper/2024/file/3bf80b34f731313b8292f4578e820c90-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > To comprehensively understand how LLMs work with different abilities, we employ four kinds of tasks including MGSM (Shi et al., 2022) for reasoning task... (Section 3.2)
  - [How do Large Language Models Handle Multilingualism?](https://proceedings.neurips.cc/paper_files/paper/2024/file/1bd359b32ab8b2a6bbafa1ed2856cf40-Paper-Conference.pdf)
- **Multilingual ability** (constructs) — *measured_by*
  > We found all the FLAN-MOE perform poorly on multi-lingual benchmarks including TyDiQA and MGSM. (Section 4.3).
  - [Mixture-of-Experts Meets Instruction Tuning: A Winning Combination for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/5222867be1bde4fb2d8ba018c03b3be8-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > Multilingual math word problems: We use MGSM (Shi et al., 2022) that translates GSM8K (Cobbe et al., 2021) to 10 languages. (Section 4.1)
  - [M2Lingual: Enhancing Multilingual, Multi-Turn Instruction Alignment in Large Language Models](https://aclanthology.org/2025.naacl-long.489.pdf)
- **Generalization** (constructs) — *measured_by*
  > we include (6) MGSM (Shi et al., 2022), a structured math reasoning task where predefined logic may suffice, to evaluate generalization to template-compatible domains. (Section 5.1)
  - [SwarmAgentic: Towards Fully Automated Agentic System Generation via Swarm Intelligence](https://aclanthology.org/2025.emnlp-main.93.pdf)
