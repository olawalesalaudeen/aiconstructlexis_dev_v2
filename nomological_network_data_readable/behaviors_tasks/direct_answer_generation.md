# Direct answer generation
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Direct solution generation, Direct answer prediction  

## State of the Field

**Space of definitions.** Across the available definitions, the dominant framing treats it as producing only a final answer, solution, or plan, without intermediate reasoning steps or traces. Papers describe it through formulations such as "Answer the question with a short answer," "Answer with the option’s letter from the given choices directly," and "outputting only the solutions (fast mode)."

**Variants.** The main named variants are direct answer generation, direct solution generation, and direct answer prediction. Papers study it in contextual question answering, as a fast mode that returns only the final solution, and in prompt settings that ask for short answers or direct choice-letter outputs; papers also commonly position it against elaborate step-by-step reasoning, and one paper reports it is related to Chain of thought.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it by eliciting direct final outputs, for example through short-answer instructions, direct choice-letter responses, or a fast mode that outputs only the final solution.

**What it is taken as evidence of.** No construct is linked to it as an indicator. Separately, one paper reports that it is related to Chain of thought.

## Sources

**[T2: An Adaptive Test-Time Scaling Strategy for Contextual Question Answering](https://aclanthology.org/2025.emnlp-main.185.pdf)**
> An observable answering behavior where the model produces a final answer without showing intermediate reasoning steps.

**[Dualformer: Controllable Fast and Slow Thinking by Learning with Randomized Reasoning Traces](https://proceedings.iclr.cc/paper_files/paper/2025/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf) (as "Direct solution generation")**
> Producing only the final answer or plan without any intermediate reasoning steps or traces.

**[Improve Vision Language Model Chain-of-thought Reasoning](https://aclanthology.org/2025.acl-long.82.pdf) (as "Direct answer prediction")**
> Generating a concise final answer without intermediate reasoning, typically in response to prompts asking for short or multiple-choice responses.
