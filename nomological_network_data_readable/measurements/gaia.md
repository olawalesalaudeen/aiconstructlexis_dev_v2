# GAIA
**Type:** Measurement  
**Referenced in:** 11 papers  

## State of the Field

**What it is.** Across papers, GAIA is most commonly treated as a benchmark for general AI assistants and tool use, with multimodal and information-seeking tasks as the dominant framing. Definitions describe it either as a multi-modal benchmark with 446 tasks and 109 files for document understanding, web surfing, logic reasoning, and answer summarization, or as 466 human-designed and annotated questions covering reasoning, multimodal comprehension, coding, and tool usage. A smaller line of work describes it more narrowly as diverse tool-use and information-seeking tasks such as web browsing and file reading, and one comparison paper characterizes it as focused solely on question answering tasks.

**What it is claimed to measure.** Papers link GAIA to 5 constructs and 2 behavioral indicators. The most recurrent use is to measure tool use, with other recurring claims that it measures reasoning and web navigation; papers also report it as measuring generalization, multimodal understanding, robustness, and tool use ability. The reported measurement scope is spread across several abilities, often framed through real-world questions or scenarios that require reasoning, web browsing, multi-modality, and tool-use proficiency.

**Space of uses.** No measurement instrument is linked to it. In use, papers position GAIA as an evaluation benchmark for agents and assistants: some report experiments on GAIA, one paper mentions evaluations on "the GTA and GAIA benchmarks", and another uses it as one of several public benchmarks for the tool-use domain. Other papers use it as a comparison point, and one says it was "inspired by the organisation of GAIA" when creating distinct difficulty levels.

**Concerns raised.** A recurring concern is benchmark maintenance over time. One paper states that "Static benchmarks are broken benchmarks in the making" and suggests evolving GAIA year by year by removing broken questions and adding new ones, to better assess generalization and robustness.

## Sources

**[Multi-modal Agent Tuning: Building a VLM-Driven Agent for Efficient Tool Usage](https://proceedings.iclr.cc/paper_files/paper/2025/file/238747e153a84f50b43fd50fa8504f33-Paper-Conference.pdf)**
> GAIA is a multi-modal benchmark with 446 tasks and 109 files used to evaluate document understanding, web surfing, logic reasoning, and answer summarization.

## Relationships

### → GAIA
- **Tool use** (behaviors tasks) — *measured_by*
  > We evaluate MaAS on six public benchmarks covering three domains: ... and (3) tool use, GAIA (Mialon et al., 2023) (Section 4.1).
  - [Multi-agent Architecture Search via Agentic Supernet](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bi/zhang25bi.pdf)
- **Reasoning** (constructs) — *measured_by*
  > GAIA proposes real-world questions that require a set of fundamental abilities such as reasoning, multi-modality handling, web browsing, and generally tool-use proficiency. (ABSTRACT)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **Web navigation** (behaviors tasks) — *measured_by*
  > GAIA proposes real-world questions that require a set of fundamental abilities such as reasoning, multi-modality handling, web browsing, and generally tool-use proficiency. (ABSTRACT)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > Static benchmarks are broken benchmarks in the making, and making GAIA evolve year-by-year through the removal of broken questions and the addition of new ones might be an important component to better assess the generalization and robustness of AI systems. (Section 5)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **Tool use ability** (constructs) — *measured_by*
  > GAIA proposes real-world questions that require a set of fundamental abilities such as reasoning, multi-modality handling, web browsing, and generally tool-use proficiency. (ABSTRACT)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > Static benchmarks are broken benchmarks in the making, and making GAIA evolve year-by-year through the removal of broken questions and the addition of new ones might be an important component to better assess the generalization and robustness of AI systems. (Section 5)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > It requires various agent capabilities, including reasoning, multi-modal understanding, web browsing, and coding. (§4.4)
  - [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf)
