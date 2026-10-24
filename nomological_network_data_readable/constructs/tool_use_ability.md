# Tool use ability
**Type:** Construct  
**Referenced in:** 38 papers  
**Also known as:** Tool reliability, Execution, Tool selection, Tool utilization, Tool-use proficiency, Tool utilization capability, Tool-use capability, Tool-use ability, Tool Use, Tool-usage reasoning, Tool learning, Tool comprehension, Tool-using capability, Tool manipulation, Tool-calling decision-making, Tool-calling capability, Flexible tool selection, Function-calling capability, Tool-using ability, API call generation capability, Planning with functions, Function-calling ability, Contextualised tool use  

## State of the Field

**Definition agreement:** Complementary. Most papers define tool use ability as a model or agent's latent capability to select, invoke, and use external tools or APIs appropriately to complete tasks. A few papers foreground narrower or adjacent aspects of that same phenomenon, such as generating valid function calls and parameters, sequencing multiple calls, deciding when not to use a tool, processing outputs, or describing the observable interaction process, so the definitions fit together as different facets rather than identical wording.

**Space of definitions.** Across most papers, the prevailing usage treats this construct as a latent capability of an LLM or agent to select, invoke, and use external tools or APIs appropriately to complete tasks, often including choosing the right tool and arguments or parameters. Many definitions stay close to this core but narrow it to function calling, API call generation, tool selection, or execution, while others broaden it to coordinating multiple tools, sequencing calls, processing tool outputs, or using tools across dialogue settings and complex real-world tasks. A smaller line instead describes tool utilization as observable tool interaction or tool use itself rather than a latent capability, and a few papers foreground particular aspects such as reliability and hallucination reduction, deciding whether to call a tool at all, comprehension of tool documentation and feedback, or integration of conversational history and user profile.

**Space of facets.** Papers break the construct into recurring facets: selecting the appropriate tool or API, generating valid calls with suitable parameters or code, planning or sequencing multiple calls, coordinating or orchestrating tools, and deciding when to call a tool versus ask follow-up questions, answer directly, or admit inability. Several names are used for closely overlapping ideas, including tool utilization, tool-use proficiency, tool-use capability, tool-calling capability, function-calling capability, tool learning, and tool-using ability, while other labels mark narrower facets such as tool comprehension, flexible tool selection, API call generation capability, planning with functions, contextualised tool use, and tool manipulation. Some papers also place it alongside other agent abilities rather than equating it with them: reasoning is described as preceding function and parameter selection, and text summarization as organizing conversation history after interaction with the environment.

**Space of measurement.** Papers operationalize the construct with 9 linked measurement instruments, and they also connect it to 2 behavioral indicators, tool use and text summarization. The most frequently used instruments are ToolBench, API-Bank, BFCL, BFCL-v2, and GAIA, followed by 4 others; these linked measures are mostly benchmarks, datasets, or executable function or tool-calling evaluations rather than human evaluation, LLM-as-a-judge, or probes. What they score is usually explicit tool or function calling, planning, retrieval, correction, and fine-grained invocation accuracy, which mostly matches the dominant capability-based definitions, though some papers define tool utilization as observable interaction and one related benchmark discussion notes that existing evaluations often emphasize calling the correct tool and parameters more than deciding when not to call a tool.

**Links.** Several papers claim a causal relationship from tool use ability to tool use. One paper claims a causal relationship from instruction following ability to tool use ability, stating that models with better instruction-following capabilities achieve greater improvements with high-quality tool instructions, and one paper reports an inverse correlation between irrelevance detection ability and tool use ability. Papers also report that tool use is related to tool use ability, and that reasoning, text summarization, and BFCL are related to tool use ability.

## Sources

**[Reducing Tool Hallucination via Reliability Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ap/xu25ap.pdf) (as "Tool reliability")**
> The ability of a large language model to accurately and effectively interact with external tools throughout a task, maximizing successful outcomes while minimizing errors and hallucinations.

**[MoRAgent: Parameter Efficient Agent Tuning with Mixture-of-Roles](https://raw.githubusercontent.com/mlresearch/v267/main/assets/han25j/han25j.pdf) (as "Execution")**
> The latent ability to select appropriate functions and parameters to invoke based on reasoning input, enabling tool use in agent tasks.

**[Can LLMs Help You at Work? A Sandbox for Evaluating LLM Agents in Enterprise Environments](https://aclanthology.org/2025.emnlp-main.466.pdf) (as "Tool selection")**
> The underlying capability of an LLM agent to identify and choose the appropriate enterprise tools or APIs required to perform a given subtask.

**[Watch Out for Your Agents! Investigating Backdoor Threats to LLM-Based Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/b6e9d6f4f3428cd5f3f9e9bbae2cab10-Paper-Conference.pdf) (as "Tool utilization")**
> The latent ability to select and invoke external tools appropriately during task execution.

**[GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf) (as "Tool-use proficiency")**
> The general capability of an AI system to effectively select and utilize external tools, such as web browsers or code interpreters, to accomplish tasks.

**[AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors](https://proceedings.iclr.cc/paper_files/paper/2024/file/578e65cdee35d00c708d4c64bce32971-Paper-Conference.pdf) (as "Tool utilization capability")**
> The model's latent ability to effectively select and use external tools to solve complex problems.

**[GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Tool-use capability")**
> The ability of a large language model to effectively select, invoke, and coordinate external tools to solve complex tasks.

**[MTU-Bench: A Multi-granularity Tool-Use Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d13b2d99519c5415661dad44ab7edcd-Paper-Conference.pdf) (as "Tool-use ability")**
> The latent capacity of an LLM to choose, call, and use external tools appropriately to satisfy user requests across dialogue settings.

**[Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf) (as "Tool Use")**
> The latent ability to interact with external tools and APIs, including functions such as web browsing, code execution, and file uploads.

**[Multi-modal Agent Tuning: Building a VLM-Driven Agent for Efficient Tool Usage](https://proceedings.iclr.cc/paper_files/paper/2025/file/238747e153a84f50b43fd50fa8504f33-Paper-Conference.pdf) (as "Tool-usage reasoning")**
> The latent ability to choose and sequence external tools effectively when solving multi-modal tasks.

**[Tool-Planner: Task Planning with Clusters across Multiple Tools](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f605d59a0dbde101518b552cb616ddf-Paper-Conference.pdf) (as "Tool learning")**
> The capability of an LLM to understand and utilize external tools or APIs to solve problems that it cannot complete independently.

**[From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c22e5e918198702765ecff4b20d0a90-Paper-Conference.pdf) (as "Tool comprehension")**
> The degree to which an LLM understands what a tool does, when to invoke it, and how to use it correctly from documentation and feedback.

**[From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c22e5e918198702765ecff4b20d0a90-Paper-Conference.pdf) (as "Tool-using capability")**
> The latent ability of an LLM to effectively leverage external tools to solve complex real-world tasks.

**[Divergent Thoughts toward One Goal: LLM-based Multi-Agent Collaboration System for Electronic Design Automation](https://aclanthology.org/2025.naacl-long.83.pdf) (as "Tool manipulation")**
> The skill of interacting with and controlling external tools or APIs, typically by generating code or commands.

**[When2Call: When (not) to Call Tools](https://aclanthology.org/2025.naacl-long.174.pdf) (as "Tool-calling decision-making")**
> The latent ability of a model to determine whether to call a tool, ask for more information, admit inability to answer, or generate a direct response based on the availability and relevance of tools and input completeness.

**[ToolFlow: Boosting LLM Tool-Calling Through Natural and Coherent Dialogue Synthesis](https://aclanthology.org/2025.naacl-long.214.pdf) (as "Tool-calling capability")**
> The model's latent ability to understand user requests, select appropriate external tools, formulate correct API calls, and process their outputs.

**[MeNTi: Bridging Medical Calculator and LLM Agent with Nested Tool Calling](https://aclanthology.org/2025.naacl-long.263.pdf) (as "Flexible tool selection")**
> The ability to dynamically and accurately choose the most appropriate tool from a large and complex toolkit based on the specific requirements of a given task or scenario.

**[CONFETTI: Conversational Function-Calling Evaluation Through Turn-Level Interactions](https://aclanthology.org/2025.acl-long.394.pdf) (as "Function-calling capability")**
> The underlying ability of a large language model to generate appropriate function calls based on natural language input and a provided list of available functions.

**[MetaAgent: Automatically Constructing Multi-Agent Systems Based on Finite State Machines](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bc/zhang25bc.pdf) (as "Tool-using ability")**
> The underlying capability of agents within a system to interact with external tools (e.g., code interpreter, search engine) to extend their functional scope and access real-world data.

**[API Pack: A Massive Multi-Programming Language Dataset for API Call Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ca1cca58101545e937302be7050098-Paper-Conference.pdf) (as "API call generation capability")**
> The model's latent ability to produce syntactically and semantically correct code snippets for invoking APIs based on natural language instructions.

**[Facilitating Multi-turn Function Calling for LLMs via Compositional Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/69c49f75ca31620f1f0d38093d9f3d9b-Paper-Conference.pdf) (as "Planning with functions")**
> The cognitive capability to decompose complex tasks into manageable steps and determine the appropriate sequence of function calls required to solve them.

**[xLAM: A Family of Large Action Models to Empower AI Agent Systems](https://aclanthology.org/2025.naacl-long.578.pdf) (as "Function-calling ability")**
> The latent capacity of a model to correctly interpret user queries and generate valid function calls with appropriate arguments, given a set of available tools.

**[TAPS: Tool-Augmented Personalisation via Structured Tagging](https://aclanthology.org/2025.emnlp-main.1200.pdf) (as "Contextualised tool use")**
> The specific ability to use tools effectively by integrating information from the conversational history and user profile.

## Relationships

### Tool use ability →
- **API-Bank** (measurements) — *measured_by*
  > API-Bank (Li et al., 2023) provides a comprehensive dataset featuring 2,138 distinct APIs and 1,888 dialogues with 4,149 API calls. This dataset is designed to evaluate LLMs’ tool-utilization capabilities, including planning, retrieval, and API-calling proficiency. (Section 2)
  - [Robust Function-Calling for On-Device Language Model via Function Masking](https://proceedings.iclr.cc/paper_files/paper/2025/file/d45e0bfb5a39477d56b55c0824200008-Paper-Conference.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > Tool learning enables Large Language Models (LLMs) to interact with external environments by invoking tools, serving as an effective strategy to mitigate the limitations inherent in their pre-training data. (ABSTRACT)
  - [From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c22e5e918198702765ecff4b20d0a90-Paper-Conference.pdf)
- **GAIA** (measurements) — *measured_by*
  > GAIA proposes real-world questions that require a set of fundamental abilities such as reasoning, multi-modality handling, web browsing, and generally tool-use proficiency. (ABSTRACT)
  - [GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf)
- **GTA** (measurements) — *measured_by*
  > Step-by-step mode is designed to evaluate the model’s fine-grained tool-use capabilities. (Section 4.1)
  - [GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BFCL** (measurements) — *measured_by*
  > Experiments are conducted on two representative benchmarks, including BFCL Yan et al. (2024) and API-Bank Li et al. (2023). The two benchmarks are comprehensive and executable function call evaluations specifically designed to assess the ability of LLMs to invoke functions.
  - [ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf)
- **BFCL-v2** (measurements) — *measured_by*
  > We evaluated TOOLFLOW’s tool-calling ability on the BFCL. (Section 5.2.1)
  - [ToolFlow: Boosting LLM Tool-Calling Through Natural and Coherent Dialogue Synthesis](https://aclanthology.org/2025.naacl-long.214.pdf)
- **ToolAlpaca** (measurements) — *measured_by*
  > ToolAlpaca (Tang et al., 2023) establishes a multi-agent simulator. It utilizes GPT-4 (OpenAI et al., 2024) to simulate the return values of tools. The model can make modifications and re-call the tool based on the return values (e.g., error messages). Finally, GPT-4 evaluates the accuracy of Process and Response.
  - [ToolFlow: Boosting LLM Tool-Calling Through Natural and Coherent Dialogue Synthesis](https://aclanthology.org/2025.naacl-long.214.pdf)
- **ToolEval** (measurements) — *measured_by*
  > “To assess the tool-use capabilities of LLMs, we develop an automatic evaluator, ToolEval” and “We first present ToolBench, an instruction-tuning dataset for tool use”
  - [ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs](https://proceedings.iclr.cc/paper_files/paper/2024/file/28e50ee5b72e90b50e7196fde8ea260e-Paper-Conference.pdf)

### → Tool use ability
- **Irrelevance detection ability** (constructs) — *correlates*
  > we identified a concerning inverse relationship between the model's ability to accurately execute function calls and its capacity for irrelevance detection
  - [Robust Function-Calling for On-Device Language Model via Function Masking](https://proceedings.iclr.cc/paper_files/paper/2025/file/d45e0bfb5a39477d56b55c0824200008-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *causes*
  > Llama3.1-70B-Instruct outperforms Llama3.1-8B-Instruct with EASYTOOL, indicating that models with better instruction-following capabilities can achieve greater improvements with high-quality tool instructions. (Section 5.1)
  - [EASYTOOL: Enhancing LLM-based Agents with Concise Tool Instruction](https://aclanthology.org/2025.naacl-long.44.pdf)

### Associated with
- **Reasoning** (constructs)
  > LLMs must first comprehend the user’s query and perform a reasonable analysis and planning, demonstrating the ability of reasoning. Subsequently, it needs to invoke the correct functions with suitable parameters, reflecting the ability of execution.
  - [MoRAgent: Parameter Efficient Agent Tuning with Mixture-of-Roles](https://raw.githubusercontent.com/mlresearch/v267/main/assets/han25j/han25j.pdf)
