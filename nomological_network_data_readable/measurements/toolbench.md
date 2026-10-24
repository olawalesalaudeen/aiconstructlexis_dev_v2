# ToolBench
**Type:** Measurement  
**Referenced in:** 22 papers  
**Also known as:** Toolbench  

## State of the Field

**What it is.** Most papers treat ToolBench as a benchmark or dataset for evaluating tool use with real-world APIs, often emphasizing diverse user requests, multi-step interactions, and tool-calling scenarios. Definitions vary: some describe a benchmark suite spanning Home Search, Trip Booking, Google Sheets, and Virtual Home, while others describe an instruction-tuning dataset built automatically with ChatGPT, with 16,464 APIs, or a corpus with over 16,000 APIs from 49 categories and over 10,000 queries with full interactions. A smaller line of work presents it as a workload whose prompts include tool demonstrations and calls, and some papers refer to a second release or to around 1,000 test cases.

**What it is claimed to measure.** Papers link ToolBench to 5 constructs and 2 behavioral indicators. The prevailing use is to measure tool use ability and tool use, followed by decision-making, planning, and reasoning. The linked claims are spread across several tool-related and decision-oriented targets rather than converging on only one.

**Space of uses.** No other measurement instrument is linked to it. Across papers, ToolBench is used as an evaluation benchmark or workload: authors report experiments on its four tool-use environments, on its test tasks, and on retrieval or end-to-end agent-tuning data converted from the original corpus. One paper describes each instance as a user request paired with a ground-truth toolset, so models only need to select and execute tools from that set.

## Sources

**[ToolChain*: Efficient Action Space Navigation in Large Language Models with A* Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/13250eb13871b3c2c0a0667b54bad165-Paper-Conference.pdf)**
> A benchmark suite for evaluating the tool-use capabilities of LLM agents across various environments, including Home Search, Trip Booking, Google Sheets, and Virtual Home.

**[Preble: Efficient Distributed Prompt Scheduling for LLM Serving](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc342f48de8264779952fac378f96dc-Paper-Conference.pdf) (as "Toolbench")**
> A workload used to evaluate an LLM's ability to use tools, characterized by prompts that include tool demonstrations and calls.

## Relationships

### → ToolBench
- **Tool use** (behaviors tasks) — *measured_by*
  > The ability to use external tools is a significant milestone in the development of LLMs... For this purpose, we utilize the large-scale tool usage dataset ToolBench [21]... (Section 3.2)
  - [StreamBench: Towards Benchmarking Continuous Improvement of Language Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/c189915371c4474fe9789be3728113fc-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > Our experiments are based on ToolBench, a real-world tool benchmark containing more 16k tool collections... Our retrieval and end-to-end agent-tuning data are converted from the original data in ToolBench. (Section 4.1)
  - [ToolGen: Unified Tool Retrieval and Calling via Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b646bdebeb87dfafe2c6f77a63b564e1-Paper-Conference.pdf)
- **Sequential decision-making** (constructs) — *measured_by*
  > conduct extensive experiments on Game of 24 (Yao et al., 2023), WebShop (Yao et al., 2022a), ToolBench (Qin et al., 2023c) and RestBench (Song et al., 2023), which contains intricate multi-step decision tasks involving diverse scenarios.
  - [Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf)
- **Decision-making** (constructs) — *measured_by*
  > We use 100, 500, and 500 instances for Game of 24, WebShop, and ToolBench to evaluate the decision-making ability respectively.
  - [Rational Decision-Making Agent with Learning Internal Utility Judgment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45994782a61bb51cad5c2bae36834265-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > ToolBench (Qin et al., 2024) specifically evaluates multi-turn reasoning and tool-usage abilities
  - [xLAM: A Family of Large Action Models to Empower AI Agent Systems](https://aclanthology.org/2025.naacl-long.578.pdf)
