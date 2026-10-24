# AgentDojo
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across papers, AgentDojo is most commonly described as an evaluation benchmark or framework for agents in dynamic environments, especially for testing agent vulnerabilities to prompt injection attacks. Some descriptions are broad, calling it a dynamic environment for testing prompt injection or agent vulnerabilities, while a more specific one presents a benchmark of stateful, multi-turn tool-use tasks in realistic environments such as email clients, online banking systems, and Slack channels. That narrower description says the benchmark contains 97 tasks across the Workspace, Slack, Travel, and Banking domains.

**What it is claimed to measure.** Papers use AgentDojo to measure four constructs, and no behavioral indicators are linked to it. The measurement claims spread across adversarial robustness, robustness, security, and utility preservation: papers describe it as measuring the adversarial robustness of AI agents, evaluating the utility and security of AI agents in dynamic tool-calling environments with untrusted data, and demonstrating utility preservation under indirect prompt injection.

**Space of uses.** Papers use AgentDojo as an evaluation benchmark for methods in stateful, multi-turn tool-use settings, including work that states, "We evaluate our method on the AgentDojo benchmark." It is linked to one other instrument, InjecAgent, which is described as related and "close in spirit" but focused on simulated single-turn scenarios where an LLM is directly fed one adversarial tool output, without evaluating planning.

## Sources

**[OS Agents: A Survey on MLLM-based Agents for Computer, Phone and Browser Use](https://aclanthology.org/2025.acl-long.369.pdf)**
> An evaluation benchmark that provides a dynamic environment for testing agent vulnerabilities, such as susceptibility to prompt injection attacks.

## Relationships

### → AgentDojo
- **Adversarial robustness** (constructs) — *measured_by*
  > To measure the adversarial robustness of AI agents, we introduce AgentDojo, an evaluation framework for agents that execute tools over untrusted data.
  - [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Security** (constructs) — *measured_by*
  > AgentDojo evaluates the utility and security of AI agents in dynamic tool-calling environments with untrusted data.
  - [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > Extensive evaluation on the IPI benchmark AgentDojo demonstrates that MELON outperforms SOTA defenses in both attack prevention and utility preservation. (Section 1)
  - [MELON: Provable Defense Against Indirect Prompt Injection Attacks in AI Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25z/zhu25z.pdf)
- **Prompt injection** (behaviors tasks) — *measured_by*
  > AgentDojo (Debenedetti et al., 2024) offers a dynamic environment for testing prompt injection attacks, and AgentHarm (Andriushchenko et al., 2024) measures the potential harm from agents executing malicious tasks.
  - [OS Agents: A Survey on MLLM-based Agents for Computer, Phone and Browser Use](https://aclanthology.org/2025.acl-long.369.pdf)

### Associated with
- **InjecAgent** (measurements)
  > The recent InjecAgent benchmark [71] is close in spirit to AgentDojo, but focuses on simulated single-turn scenarios, where an LLM is directly fed a single (adversarial) piece of data as a tool output (without evaluating the model’s planning).
  - [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf)
