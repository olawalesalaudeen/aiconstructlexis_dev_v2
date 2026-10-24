# Unit test generation
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Test case generation, Test generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as producing unit tests, or an entire unit test suite, for a given piece of code or file under test so that functional correctness can be checked. A smaller line of work uses a broader task framing, describing the behavior as creating executable test cases or logical checks from a problem description, or writing desired input/output pairs before solving the problem; in those formulations, the tests are used to assess response accuracy and relevance or are rewarded for validity and correctness.

**Variants.** Papers use several nearby names, most often "unit test generation," and less often "test generation" or "test case generation." The main variants are generating a full suite for a file under test, generating diverse tests from a natural language specification in zero-shot prompting, producing 5-10 concise test statements from an instruction prompt, and writing input/output pairs to formalize a programming problem before solving it; one benchmark describes the goal as generating "an entire test suite given a file under test" (TestGenEval: A Real World Unit Test Generation and Test Completion Benchmark), while another prompts for "n = 10 diverse and extensive tests" from the problem description (Revisit Self-Debugging with Self-Generated Tests for Code Generation).

**Space of elicitation and scores.** No measurement instrument is linked to it in these papers. Instead, papers operationalize the behavior directly through prompting and output requirements, such as a full test suite, 5-10 concise test statements, or desired input/output pairs, and they describe scoring in terms of test validity, correctness, and how well the tests assess response accuracy and relevance.

**What it is taken as evidence of.** In these papers, it is not linked to any construct, so the papers do not specify what broader construct it is taken to indicate.

## Sources

**[CodexGraph: Bridging Large Language Models and Code Repositories via Code Graph Databases](https://aclanthology.org/2025.naacl-long.7.pdf)**
> The task of automatically creating unit tests for a given piece of code to verify its functional correctness.

**[MONA: Myopic Optimization with Non-myopic Approval Can Mitigate Multi-step Reward Hacking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/farquhar25a/farquhar25a.pdf) (as "Test case generation")**
> The observable behavior of an LLM writing input/output test cases to formalize a programming problem before solving it.

**[Revisit Self-Debugging with Self-Generated Tests for Code Generation](https://aclanthology.org/2025.acl-long.881.pdf) (as "Test generation")**
> The observable task of creating a suite of test cases, including inputs and expected outputs, based on a natural language problem description.

## Relationships

### Associated with
- **Evaluation** (behaviors tasks)
  > Unit Test Generators and Evaluators are placed in consecutive layers, with the Unit Test Generator always first. (Section 3.2)
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
