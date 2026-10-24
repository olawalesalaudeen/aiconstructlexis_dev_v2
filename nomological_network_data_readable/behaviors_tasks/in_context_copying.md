# In-context copying
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Contextual copying, Precise copying  

## State of the Field

**Space of definitions.** Across the available definitions, the prevailing usage treats it as exact reproduction of a token sequence from earlier in the input when prompted. Success is framed as returning the requested segment accurately, for example, one paper states that the objective can be to "output the suffix of the queried prefix" (HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation). Related formulations describe copying the correct token sequence from an input segment into the response, and in some work the target is narrowed to specific code elements such as function names and parameters.

**Variants.** Papers use several nearby labels, including in-context copying, contextual copying, and precise copying. One line studies retrieval from long contexts, while another studies a code "Copy" subtask centered on predefined parameters, functions, and imported APIs, with the explicit note that "reordering the functions in the input does not affect the output" (Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation). Another formulation appears in rule-based chatbot settings, where the model may need to generate a constant word or copy a word from one of the decomposition groups.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it through direct task objectives of exact reproduction, such as outputting a queried suffix, reproducing code elements regardless of position, or copying a word from a specified input segment or group.

**What it is taken as evidence of.** No construct is linked to it. The available papers therefore describe it as an output behavior without a shared claim about which construct it indicates.

## Sources

**[HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)**
> The observable behavior of reproducing a specific token sequence from earlier in the input when prompted, demonstrating precise retrieval from long contexts.

**[Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation](https://aclanthology.org/2025.acl-long.308.pdf) (as "Contextual copying")**
> Accurately reproducing specific code elements (e.g., function names, parameters) from the input context regardless of their position, testing permutation-invariant retrieval.

**[Representing Rule-based Chatbots with Transformers](https://aclanthology.org/2025.naacl-long.163.pdf) (as "Precise copying")**
> Copying the correct token sequence from an input segment into the generated response.
