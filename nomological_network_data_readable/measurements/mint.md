# MINT
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Mint-Bench  

## State of the Field

**What it is.** Papers most commonly describe MINT as a multi-turn interactive agent evaluation framework or benchmark that adapts existing datasets into interactive, feedback-rich environments. The prevailing description centers on evaluating task-solving through multi-turn interaction, especially by using tools and leveraging natural language feedback; definitions also mention agent capabilities such as tool use and self-debugging, and a curated subset of reasoning, code generation, and decision-making tasks with GPT-4-simulated feedback. Some uses refer to a part of the MINT dataset focused on tool-utilization for reasoning, another use only considers coding and math problems, and related work also refers to it as Mint-Bench.

**What it is claimed to measure.** Claims about what MINT measures are concentrated rather than spread across many targets. It is linked to 1 construct, Responsiveness to human feedback, and 1 behavioral indicator, Multi-turn interaction: papers use it to measure responsiveness to human feedback through "leveraging natural language feedback," and to measure multi-turn interaction. More generally, papers describe it as evaluating performance or task-solving ability in multi-turn interaction with tools and language feedback.

**Space of uses.** Papers mostly position MINT as a benchmark or benchmarking approach for multi-turn evaluation. One paper says it follows the approach of the MINT benchmarks by using "a GPT-4 simulated user as a teacher to guide the model in problem-solving," while another adopts MINT for multi-turn evaluation but only uses the coding and math problems. No measurement instrument is linked to it, though a related-work discussion groups Mint-Bench with AgentBench and AgentBoard.

## Sources

**[Lemur: Harmonizing Natural Language and Code for Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/41ec0e510c31883f3b50a782651fb5b9-Paper-Conference.pdf)**
> Multi-turn Interactive agent evaluation framework that adapts existing datasets into interactive, feedback-rich environments for assessing agent capabilities like tool use and self-debugging.

**[xLAM: A Family of Large Action Models to Empower AI Agent Systems](https://aclanthology.org/2025.naacl-long.578.pdf) (as "Mint-Bench")**
> A benchmark mentioned in related work for assessing the abilities of LLM agents.

## Relationships

### → MINT
- **Responsiveness to human feedback** (constructs) — *measured_by*
  > It is a benchmark for LLMs that measures their performance during multi-turn interaction, focusing on two particular capabilities (§2.1): ... (2) leveraging natural language feedback. (Section 1)
  - [MINT: Evaluating LLMs in Multi-turn Interaction with Tools and Language Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/8a0d3ae989a382ce6e50312bc35bf7e1-Paper-Conference.pdf)
- **Multi-turn interaction** (behaviors tasks) — *measured_by*
  > For multi-turn evaluation, we adopt MINT (Wang et al., 2023b) and only consider the coding and math problems.
  - [Advancing LLM Reasoning Generalists with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e2c12c1a41af7c19c5b38e0837a52d1-Paper-Conference.pdf)
