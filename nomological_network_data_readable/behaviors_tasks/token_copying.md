# Token copying
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the papers, token copying is most commonly described as producing a token from the prompt or earlier context, often by identifying a token at a specified position such as the first or last token and reproducing it. The descriptions agree on that core behavior, though one phrasing emphasizes a position-based task while another states it more generally as generating a token that appeared earlier in context. Some authors also broaden the scope from a single token to single or multiple tokens and treat copying and recalling as interchangeable labels for the behavior.

**Variants.** The variants discussed are mainly positional and span based: copying a token from a designated prompt position, copying elements that occur earlier along an input sequence, and recalling either a single token or multiple tokens from the prompt. The examples given also include copying an earlier name token and copying a color token from context.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers describe it through task prompts that require reproducing the requested token, either from a specified position in the prompt or from earlier in the context, including single-token and multi-token recall.

**What it is taken as evidence of.** Papers do not link it to several constructs. The only linked construct is Representation collapse, and one paper claims a causal relationship from Representation collapse to Token copying, stating that the model is 'provably unable to respond to these sequences in different ways', 'leading to errors in, e.g., tasks involving counting or copying' (Transformers need glasses! Information over-squashing in language tasks).

## Sources

**[Transformers need glasses! Information over-squashing in language tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1d35561c4a4a0e0b6012b2af531e149-Paper-Conference.pdf)**
> The task of identifying and reproducing a specific token from a given position (e.g., first or last) in the input prompt.

## Relationships

### → Token copying
- **Representation collapse** (constructs) — *causes*
  > As a result, the model is provably unable to respond to these sequences in different ways—leading to errors in, e.g., tasks involving counting or copying. (Abstract)
  - [Transformers need glasses! Information over-squashing in language tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1d35561c4a4a0e0b6012b2af531e149-Paper-Conference.pdf)
