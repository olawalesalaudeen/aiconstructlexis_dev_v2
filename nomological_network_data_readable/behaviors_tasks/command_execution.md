# Command execution
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Shell command execution  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this as an observable action where an agent executes shell commands in an environment while solving a task. Definitions converge on environment interaction: one describes a tool that "enables the LLM to execute commands within an Ubuntu 22.04 Docker container equipped with essential tools," while another defines it as generating and running terminal commands to interact with the file system, run build tools, and carry out compilation.

**Variants.** The available work uses both "Command execution" and "Shell command execution" and applies the behavior in two main settings. One is containerized problem solving, where commands interact with files, networks, or processes; the other is repo-level compilation, where the agent uses a Shell tool to download a target repository, mount it into a container, and execute commands for the compilation process.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior in the surveyed papers.

**What it is taken as evidence of.** No construct is linked to this behavior in the surveyed papers.

## Sources

**[NYU CTF Bench: A Scalable Open-Source Benchmark Dataset for Evaluating LLMs in Offensive Security](https://proceedings.neurips.cc/paper_files/paper/2024/file/69d97a6493fbf016fff0a751f253ad18-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Executing shell commands within a containerized environment to interact with files, networks, or processes as part of a problem-solving sequence.

**[CompileAgent: Automated Real-World Repo-Level Compilation with Tool-Integrated LLM-based Agent System](https://aclanthology.org/2025.acl-long.103.pdf) (as "Shell command execution")**
> The observable action of an agent generating and running commands in a terminal shell to interact with the file system, run build tools, and perform the compilation process.
