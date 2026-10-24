# WildChat
**Type:** Measurement  
**Referenced in:** 12 papers  

## State of the Field

**What it is.** Across the definitions, WildChat is most commonly described as a dataset of real-world LLM conversations or real-world user interactions. Papers variously frame it as conversations with GPT models performing daily tasks, collected through a free GPT API in exchange for shared logs, and as a source of out-of-distribution prompts; one paper also describes it as a comprehensive multi-turn, multi-lingual dataset of 1 million timestamped conversations, and another says it "more closely reflects real user needs."

**What it is claimed to measure.** Papers link WildChat to 2 constructs and 2 behavioral indicators. The main measurement uses in these papers are to measure Overrefusal, Harmlessness, and Multilingual ability: papers describe over-refusal evaluations using WildChat, test harmlessness with "highly toxic prompts from WildChat," and assess multilingual capability with MultiAlpaca and WildChat; a separate paper relates it to Multi-turn dialogue rather than treating that link as a measurement claim. In the available work, these claims are spread across several targets rather than centered on one construct.

**Space of uses.** WildChat is used as evaluation data rather than alongside any linked measurement instrument, and no measurement instrument is linked to it. Papers pair it with MultiAlpaca for multilingual capability assessment and discuss it alongside LmsysChat as real-world interaction data, contrasted with UltraChat's synthetic responses; other uses include over-refusal evaluation, harmlessness testing with toxic prompts, out-of-distribution prompt sourcing for classifier generalization, and analysis of whether model outputs overlap with online text in benign interactions.

## Sources

**[Measuring Non-Adversarial Reproduction of Training Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/861777345d8b03ec648e768cd54f1c42-Paper-Conference.pdf)**
> A dataset of real-world LLM conversations used here to analyze whether generated outputs overlap with online text in benign interactions.

## Relationships

### → WildChat
- **Overrefusal** (behaviors tasks) — *measured_by*
  > “we construct an over-refusal evaluation using the WildChat dataset [74].”
  - [Improving Alignment and Robustness with Circuit Breakers](https://proceedings.neurips.cc/paper_files/paper/2024/file/97ca7168c2c333df5ea61ece3b3276e1-Paper-Conference.pdf)
- **Multilingual ability** (constructs) — *measured_by*
  > (2) Multilingual Capability: Assessed with MultiAlpaca and WildChat datasets, covering French, Canadian French, German, and Italian, with English questions from MKQA. (Section 5.3. FPO Achieves Accurate Control Over Model Capabilities)
  - [Constrain Alignment with Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yin25a/yin25a.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > For harmlessness, models are required to provide clear refusals to harmful queries... We test the models on ... highly toxic prompts from WildChat (Zhao et al., 2024)... (Section 3.1)
  - [STAIR: Improving Safety Alignment with Introspective Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cx/zhang25cx.pdf)

### Associated with
- **Multi-turn dialogue** (behaviors tasks)
  > this paper presents the WILDCHAT dataset, a comprehensive multi-turn, multi-lingual dataset consisting of 1 million timestamped conversations (Section 1).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
