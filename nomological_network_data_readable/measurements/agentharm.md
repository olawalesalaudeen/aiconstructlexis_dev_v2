# AgentHarm
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the cited definitions, AgentHarm is treated as a safety benchmark for harmful or malicious agent behavior. Papers describe it in two ways: as malicious tasks for general agents that evaluate general agent safety and vulnerability to harmful instructions, and as a benchmark for tool-using LLMs that provides detailed safety measurements through harmful and benign examples, including multi-step trajectories with injected harmful tool outputs to test refusal behavior.

**What it is claimed to measure.** Papers link AgentHarm to 2 constructs, Harmlessness and Robustness, and no behavioral indicators. The reported measurement claims are split across those constructs: some work uses it to measure harmfulness or harmlessness in LLM agents, while other work reports that it measures the potential harm from agents executing malicious tasks under Robustness.

**Space of uses.** In the available uses, papers position AgentHarm as a safety evaluation benchmark, and no other measurement instrument is linked to it. One framing uses it for general agents and harmful instructions, while another uses it to test safety in tool-using settings, especially refusal behavior when multi-step tool outputs contain harmful content.

## Sources

**[ShieldAgent: Shielding Agents via Verifiable Safety Policy Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ae/chen25ae.pdf)**
> A benchmark comprising 110 malicious tasks designed to evaluate general agent safety and vulnerability to harmful instructions.

## Relationships

### → AgentHarm
- **Harmlessness** (constructs) — *measured_by*
  > AgentHarm (Andriushchenko et al., 2024b) is a benchmark proposed for measuring such harmfulness in LLM agents based on Inspect AI (UK AI Safety Institute, 2024).
  - [UDora: A Unified Red Teaming Framework against LLM Agents by Dynamically Hijacking Their Own Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cl/zhang25cl.pdf)
- **Safety** (constructs) — *measured_by*
  > AgentHarm (Andriushchenko et al., 2024) measures the potential harm from agents executing malicious tasks.
  - [OS Agents: A Survey on MLLM-based Agents for Computer, Phone and Browser Use](https://aclanthology.org/2025.acl-long.369.pdf)
