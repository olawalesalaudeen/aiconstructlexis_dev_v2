# Idea diversity
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Distinctness  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers, the prevailing usage treats this construct as within-set diversity among a model's generated ideas: the degree to which solution ideas differ semantically from one another instead of repeating near-duplicate or similar content. The definitions align on the comparison standard, diversity is assessed across the ideas in a generated set rather than against an external reference. One paper further situates the issue as a lack of high-level diversity in model outputs, specifically in candidate plans for solving a problem in natural language.

**Space of facets.** The main variation is terminological rather than conceptual. One paper uses the name Idea diversity, while another uses Distinctness and describes average idea distinctness for a model in a domain; in both cases, the construct refers to diverse idea generation. The wording also shifts by setting, with one paper framing it in an idea-space for solution planning and another in generated scientific research ideas.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to the construct. Still, the papers operationalize it through direct scoring of difference among generated ideas: one paper describes a diversity score over candidate plans, and another introduces the Idea Distinctness Index, with its metric defined as average idea distinctness for a model in a domain. These operationalizations closely follow the definitions by quantifying semantic difference among generated ideas rather than repeated content.

## Sources

**[Planning in Natural Language Improves LLM Search for Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/071a637d41ea290ac4360818a8323f33-Paper-Conference.pdf)**
> The degree to which a model's generated solution ideas differ from one another rather than repeatedly expressing near-duplicate concepts.

**[Can Large Language Models Unlock Novel Scientific Research Ideas?](https://aclanthology.org/2025.emnlp-main.1704.pdf) (as "Distinctness")**
> The degree to which a set of generated ideas differs semantically from one another rather than repeating similar content.

## Relationships

### Associated with
- **Repeated sampling** (measurements)
  > In the most egregious of cases with little to no diversity, such as greedy decoding, repeated sampling from the model returns highly similar programs, resulting in minimal gain from additional inference-time compute.
  - [Planning in Natural Language Improves LLM Search for Code Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/071a637d41ea290ac4360818a8323f33-Paper-Conference.pdf)
