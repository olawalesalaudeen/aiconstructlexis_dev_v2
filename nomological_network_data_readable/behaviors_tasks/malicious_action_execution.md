# Malicious action execution
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Harmful behavior execution  

## State of the Field

**Space of definitions.** Across the papers, this behavior is treated as observable harmful action by an agent. One framing limits it to a harmful or unintended action that occurs after a successful adversarial attack, while another includes an LLM agent either attempting to carry out or successfully carrying out a user instruction described as malicious, dangerous, illegal, or unethical. The papers agree on the behavioral core, observable harmful action, but differ on whether an attempt counts and whether the behavior is defined specifically through adversarial attack.

**Variants.** The papers use both the names "malicious action execution" and "harmful behavior execution". The studied settings also differ: one describes an adversary seeking to maximize the probability that an agent, under adversarial modifications, performs a malicious action for an input query, while another studies harmful behaviors during user interactions and reports them for browser agents.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers. Instead, the behavior is described directly in terms of whether an agent performs a malicious action, or attempts to or successfully carries out a harmful instruction.

**What it is taken as evidence of.** No construct is linked to it in the papers, so the papers do not explicitly specify what named construct it is evidence of.

## Sources

**[Agent Security Bench (ASB): Formalizing and Benchmarking Attacks and Defenses in LLM-based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/5750f91d8fb9d5c02bd8ad2c3b44456b-Paper-Conference.pdf)**
> The observable performance of a harmful or unintended action by an agent as a result of a successful adversarial attack.

**[Aligned LLMs Are Not Aligned Browser Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/42f92b78a6695f60db0cd38b54d57a41-Paper-Conference.pdf) (as "Harmful behavior execution")**
> The observable action of an LLM agent attempting to or successfully carrying out a user instruction that is malicious, dangerous, illegal, or unethical.
